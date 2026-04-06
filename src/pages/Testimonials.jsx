import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const testimonials = [
  // Content will be added once provided by client
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Testimonials | PPA P.Eng. Academy</title>
        <meta name="description" content="Hear from engineers who passed their P.Eng. exam with PPA P.Eng. Academy. Real results from real students across Canada." />
        <link rel="canonical" href="https://www.ppapeng.ca/testimonials" />
        <meta property="og:title" content="Testimonials | PPA P.Eng. Academy" />
        <meta property="og:description" content="Hear from engineers who passed their P.Eng. exam with PPA P.Eng. Academy." />
        <meta property="og:url" content="https://www.ppapeng.ca/testimonials" />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Results speak <span className="text-gradient">for themselves.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Engineers across Canada have used PPA P.Eng. Academy to prepare for and pass their Professional Engineer exam on the first attempt.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {testimonials.length === 0 ? (
            <p className="text-muted-foreground text-sm">Testimonials coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="border border-border rounded-xl p-6 flex flex-col gap-4">
                  <p className="text-foreground text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    {t.discipline && (
                      <p className="text-muted-foreground text-xs mt-0.5">{t.discipline}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
            <span className="font-heading font-bold text-foreground">PPA P.Eng. Academy</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:charbelabousamrah@ppapeng.ca" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail size={14} /> charbelabousamrah@ppapeng.ca
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

export default Testimonials;
