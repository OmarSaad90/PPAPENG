import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ArrowLeft, LogOut } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const isAdmin = () => localStorage.getItem('ppa_admin') === 'true';

const formatTime = (ts) =>
  new Date(ts).toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });

const formatDate = (ts) =>
  new Date(ts).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });

// ─── User chat ───────────────────────────────────────────────────────────────

const UserChat = ({ onClose }) => {
  const [step, setStep] = useState('form'); // 'form' | 'chat'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('ppa_conversation');
    if (saved) {
      const { id, name: n } = JSON.parse(saved);
      setConversationId(id);
      setName(n);
      setStep('chat');
    }
  }, []);

  useEffect(() => {
    if (!conversationId) return;
    supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })
      .then(({ data }) => setMessages(data || []));

    const channel = supabase
      .channel(`conv-${conversationId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`,
      }, (payload) => {
        setMessages((prev) => [...prev, payload.new]);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startChat = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('conversations')
      .insert({ user_name: name, user_email: email || null })
      .select()
      .single();
    if (error || !data) return;
    localStorage.setItem('ppa_conversation', JSON.stringify({ id: data.id, name }));
    setConversationId(data.id);
    setStep('chat');
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;
    setSending(true);
    await supabase.from('messages').insert({
      conversation_id: conversationId,
      sender: 'user',
      content: input.trim(),
    });
    await supabase
      .from('conversations')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', conversationId);
    setInput('');
    setSending(false);
  };

  if (step === 'form') {
    return (
      <div className="flex flex-col h-full">
        <div className="px-5 py-4 border-b border-border">
          <p className="font-heading font-semibold text-foreground text-sm">Start a conversation</p>
          <p className="text-muted-foreground text-xs mt-0.5">We typically reply within a few hours.</p>
        </div>
        <form onSubmit={startChat} className="flex flex-col gap-3 p-5 flex-1">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jane Smith"
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email <span className="text-muted-foreground/50">(optional)</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            className="mt-auto bg-primary text-primary-foreground font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Start chatting
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div>
          <p className="font-heading font-semibold text-foreground text-sm">PPA P.Eng. Academy</p>
          <p className="text-muted-foreground text-xs mt-0.5">Hi {name}, ask us anything.</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-muted-foreground text-xs text-center py-4">Send a message to get started.</p>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-primary text-primary-foreground rounded-br-sm'
                : 'bg-secondary text-foreground rounded-bl-sm'
            }`}>
              <p>{msg.content}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/60 text-right' : 'text-muted-foreground'}`}>
                {formatTime(msg.created_at)}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="px-4 py-3 border-t border-border flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || sending}
          className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
};

// ─── Admin inbox ──────────────────────────────────────────────────────────────

const AdminInbox = ({ onClose }) => {
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('conversations')
        .select('*')
        .order('last_message_at', { ascending: false });
      setConversations(data || []);
    };
    load();

    const channel = supabase
      .channel('admin-conversations')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'conversations' }, load)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setConversations((prev) =>
          prev.map((c) =>
            c.id === payload.new.conversation_id
              ? { ...c, last_message_at: payload.new.created_at, _unread: payload.new.sender === 'user' }
              : c
          ).sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at))
        );
        if (payload.new.conversation_id === selected?.id) {
          setMessages((prev) => [...prev, payload.new]);
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', selected.id)
      .order('created_at', { ascending: true })
      .then(({ data }) => setMessages(data || []));
  }, [selected]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendReply = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending || !selected) return;
    setSending(true);
    await supabase.from('messages').insert({
      conversation_id: selected.id,
      sender: 'admin',
      content: input.trim(),
    });
    await supabase
      .from('conversations')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', selected.id);
    setInput('');
    setSending(false);
  };

  const logout = () => {
    localStorage.removeItem('ppa_admin');
    onClose();
  };

  const unreadCount = conversations.filter((c) => c._unread).length;

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          {selected && (
            <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} />
            </button>
          )}
          <p className="font-heading font-semibold text-foreground text-sm">
            {selected ? selected.user_name : `Inbox ${unreadCount > 0 ? `(${unreadCount})` : ''}`}
          </p>
        </div>
        <button onClick={logout} className="text-muted-foreground hover:text-foreground transition-colors" title="Sign out">
          <LogOut size={15} />
        </button>
      </div>

      {!selected ? (
        <div className="flex-1 overflow-y-auto divide-y divide-border">
          {conversations.length === 0 && (
            <p className="text-muted-foreground text-xs text-center py-8">No conversations yet.</p>
          )}
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => { setSelected(conv); setConversations((prev) => prev.map((c) => c.id === conv.id ? { ...c, _unread: false } : c)); }}
              className="w-full text-left px-4 py-3.5 hover:bg-secondary transition-colors flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-medium truncate ${conv._unread ? 'text-primary' : 'text-foreground'}`}>
                    {conv.user_name}
                  </p>
                  {conv._unread && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                </div>
                {conv.user_email && (
                  <p className="text-xs text-muted-foreground truncate">{conv.user_email}</p>
                )}
              </div>
              <p className="text-xs text-muted-foreground shrink-0">{formatDate(conv.last_message_at)}</p>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.sender === 'admin'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-secondary text-foreground rounded-bl-sm'
                }`}>
                  <p>{msg.content}</p>
                  <p className={`text-[10px] mt-1 ${msg.sender === 'admin' ? 'text-primary-foreground/60 text-right' : 'text-muted-foreground'}`}>
                    {formatTime(msg.created_at)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendReply} className="px-4 py-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Reply..."
              className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0"
            >
              <Send size={14} />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

// ─── Main widget ──────────────────────────────────────────────────────────────

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [admin] = useState(isAdmin);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (!admin) return;
    const load = async () => {
      const { data } = await supabase
        .from('conversations')
        .select('id');
      if (!data) return;
    };
    load();

    const channel = supabase
      .channel('widget-unread')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        if (payload.new.sender === 'user' && !open) {
          setUnread((prev) => prev + 1);
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [admin, open]);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] h-[480px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 bg-primary">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-green-300" />
              <p className="text-primary-foreground font-medium text-sm">
                {admin ? 'Admin inbox' : 'Chat with us'}
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            {admin
              ? <AdminInbox onClose={() => setOpen(false)} />
              : <UserChat onClose={() => setOpen(false)} />
            }
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </>
  );
};

export default ChatWidget;
