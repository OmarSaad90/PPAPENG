import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "6bf93b20-49a0-431d-aeb6-9e399f17daf6", ...form }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact PPA P.Eng. Academy | P.Eng. Exam Prep Canada</title>
        <meta name="description" content="Contact PPA P.Eng. Academy for questions about P.Eng. exam preparation courses, enrollment, and certification guidance. Serving engineers across Canada." />
        <link rel="canonical" href="https://www.ppapeng.ca/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact PPA P.Eng. Academy | P.Eng. Exam Prep Canada" />
        <meta property="og:description" content="Contact PPA P.Eng. Academy for questions about P.Eng. exam preparation courses and enrollment across Canada." />
        <meta property="og:url" content="https://www.ppapeng.ca/contact" />
        <meta property="og:image" content="https://www.ppapeng.ca/logo1.webp" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact PPA P.Eng. Academy | P.Eng. Exam Prep Canada" />
        <meta name="twitter:description" content="Contact PPA P.Eng. Academy for questions about P.Eng. exam preparation courses and enrollment." />
        <meta name="twitter:image" content="https://www.ppapeng.ca/logo1.webp" />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Get in touch.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Questions about a course, enrollment, or anything else? Send us a message and we will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: contact details */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-10">
              Reach us directly
            </p>
            <div className="space-y-10">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                  <Mail size={12} className="text-primary" /> Email
                </p>
                <a
                  href="mailto:charbel.abousamra@ppapeng.ca"
                  className="block text-foreground font-semibold text-lg hover:text-primary transition-colors"
                >
                  charbel.abousamra@ppapeng.ca
                </a>
              </div>

              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                  <Phone size={12} className="text-primary" /> Phone
                </p>
                <a
                  href="tel:+14372990347"
                  className="block text-foreground font-semibold text-lg hover:text-primary transition-colors"
                >
                  +1 (437) 299-0347
                </a>
              </div>

              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                  <MapPin size={12} className="text-primary" /> Location
                </p>
                <p className="text-foreground font-semibold text-lg">Toronto, Ontario, Canada</p>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We typically respond within one business day. For urgent enrollment questions, calling or emailing directly is the fastest option.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center py-12">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Mail size={18} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-3">Message sent.</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Thanks for reaching out. We will get back to you at <span className="text-foreground font-medium">{form.email}</span> as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 text-sm text-primary font-medium hover:underline text-left"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Course inquiry">Course inquiry</option>
                    <option value="Enrollment help">Enrollment help</option>
                    <option value="Payment question">Payment question</option>
                    <option value="Technical issue">Technical issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
            <span className="font-heading font-bold text-foreground">PPA P.Eng. Academy</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:charbel.abousamra@ppapeng.ca" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail size={14} /> charbel.abousamra@ppapeng.ca
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} /> +1 (437) 299-0347
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> Toronto, ON
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
