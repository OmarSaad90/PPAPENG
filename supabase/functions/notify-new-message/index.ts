// Supabase Edge Function: email Charbel when a user sends a chat message.
// Triggered by a Database Webhook on INSERT into `public.messages`.
// Debounces to one email per conversation per DEBOUNCE_MINUTES.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL")!;
const WEBHOOK_SECRET = Deno.env.get("WEBHOOK_SECRET")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SITE_URL = Deno.env.get("SITE_URL") ?? "https://ppapeng.ca";
const FROM_ADDRESS = Deno.env.get("FROM_ADDRESS") ?? "PPA Chat <onboarding@resend.dev>";
const DEBOUNCE_MINUTES = 10;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const stripNewlines = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

Deno.serve(async (req) => {
  if (req.headers.get("x-webhook-secret") !== WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: { record?: { conversation_id?: string; sender?: string; content?: string } };
  try {
    payload = await req.json();
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  const message = payload.record;
  if (!message || message.sender !== "user" || !message.conversation_id || !message.content) {
    return new Response("skip", { status: 200 });
  }

  // Look up conversation: name, email, last notification time
  const convRes = await fetch(
    `${SUPABASE_URL}/rest/v1/conversations?id=eq.${message.conversation_id}&select=user_name,user_email,last_notified_at`,
    {
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
    },
  );
  if (!convRes.ok) {
    return new Response(`conv lookup failed: ${await convRes.text()}`, { status: 500 });
  }
  const rows = await convRes.json();
  const conv = rows[0];
  if (!conv) return new Response("no conv", { status: 200 });

  // Debounce
  if (conv.last_notified_at) {
    const elapsedMs = Date.now() - new Date(conv.last_notified_at).getTime();
    if (elapsedMs < DEBOUNCE_MINUTES * 60 * 1000) {
      return new Response("debounced", { status: 200 });
    }
  }

  const safeName = stripNewlines(conv.user_name || "a visitor").slice(0, 80);
  const safeEmail = conv.user_email ? stripNewlines(conv.user_email).slice(0, 120) : null;
  const rawPreview = message.content.length > 400 ? message.content.slice(0, 400) + "…" : message.content;
  const previewHtml = escapeHtml(rawPreview);
  const fromLine = safeEmail
    ? `${escapeHtml(safeName)} &lt;${escapeHtml(safeEmail)}&gt;`
    : escapeHtml(safeName);

  const html = `<!doctype html><html><body style="margin:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <h2 style="color:#111827;font-size:20px;margin:0 0 4px;">You received a new chat message</h2>
    <p style="color:#6b7280;font-size:14px;margin:0 0 24px;">From <strong style="color:#111827;">${fromLine}</strong></p>
    <div style="background:#f7f4ef;border-left:3px solid #d97706;padding:16px 18px;border-radius:6px;margin-bottom:24px;">
      <p style="color:#111827;font-size:15px;line-height:1.55;margin:0;white-space:pre-wrap;">${previewHtml}</p>
    </div>
    <a href="${SITE_URL}/admin" style="display:inline-block;background:#d97706;color:#fff;padding:11px 22px;border-radius:8px;text-decoration:none;font-weight:500;font-size:14px;">Reply in admin panel</a>
    <p style="color:#9ca3af;font-size:12px;margin:32px 0 0;line-height:1.5;">To avoid inbox spam, you won't get another email for this conversation for the next ${DEBOUNCE_MINUTES} minutes, even if more messages come in.</p>
  </div>
</body></html>`;

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: ADMIN_EMAIL,
      subject: `You received a message from ${safeName}`,
      html,
      reply_to: safeEmail || undefined,
    }),
  });

  if (!emailRes.ok) {
    const err = await emailRes.text();
    console.error("Resend error:", err);
    return new Response(`email failed: ${err}`, { status: 500 });
  }

  // Update debounce timestamp
  await fetch(
    `${SUPABASE_URL}/rest/v1/conversations?id=eq.${message.conversation_id}`,
    {
      method: "PATCH",
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ last_notified_at: new Date().toISOString() }),
    },
  );

  return new Response("sent", { status: 200 });
});
