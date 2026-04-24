import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Mail, CheckCircle, ArrowRight, Phone, MapPin, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = [
  {
    icon: BookOpen,
    title: "Browse our courses",
    desc: "Explore all available P.Eng. exam preparation courses by engineering discipline.",
    link: "/courses",
    linkLabel: "View courses",
  },
  {
    icon: Mail,
    title: "Reach out to enroll",
    desc: "Contact us through the form below or email us directly at charbel.abousamra@ppapeng.ca with the course you want and your name.",
  },
  {
    icon: CheckCircle,
    title: "We take it from there",
    desc: "We will confirm your spot, send you all the details, and get you started as quickly as possible.",
  },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Enroll in P.Eng. Exam Prep Courses | PPA P.Eng. Academy</title>
        <meta name="description" content="Enroll in P.Eng. exam prep courses at PPA P.Eng. Academy. Email-based enrollment, 100% pass rate, full refund guarantee if you do not pass." />
        <link rel="canonical" href="https://www.ppapeng.ca/enroll" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Enroll in P.Eng. Exam Prep Courses | PPA P.Eng. Academy" />
        <meta property="og:description" content="Simple enrollment for P.Eng. exam preparation courses. 100% pass rate guaranteed or your money back." />
        <meta property="og:url" content="https://www.ppapeng.ca/enroll" />
        <meta property="og:image" content="https://www.ppapeng.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enroll in P.Eng. Exam Prep Courses | PPA P.Eng. Academy" />
        <meta name="twitter:description" content="Simple enrollment for P.Eng. exam preparation courses. 100% pass rate guaranteed or your money back." />
        <meta name="twitter:image" content="https://www.ppapeng.ca/og-image.png" />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Enrollment</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Ready to get started?
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Enrolling is straightforward. Pick a course, reach out, and we handle everything else.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-14 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading text-base font-bold text-foreground mb-1">100% pass rate</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every student who completed a PPA P.Eng. Academy course passed their P.Eng. exam. Not most -- every single one. That track record is what we stand behind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading text-base font-bold text-foreground mb-1">Full refund guarantee</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you complete the course and do not pass your P.Eng. exam, you get every dollar back. No forms, no hoops, no questions asked.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 border-b border-border" style={{ backgroundColor: '#f7f4ef', backgroundImage: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-12">How it works</p>

          {/* Desktop */}
          <div className="hidden md:flex items-stretch">
            {steps.map((step, index) => (
              <>
                <div key={step.title} className="flex-1 flex flex-col items-center text-center px-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                    <step.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <Link to={step.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline mt-2">
                      {step.linkLabel} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center shrink-0">
                    <ArrowRight size={18} className="text-muted-foreground" />
                  </div>
                )}
              </>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-8 md:hidden">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <Link to={step.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline mt-2">
                      {step.linkLabel} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Questions before enrolling?
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
            Reach out and we will help you choose the right course and get started.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Contact Us <ArrowRight size={15} />
          </Link>
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

export default Payments;
