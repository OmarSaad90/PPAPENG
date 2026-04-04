import { Link } from "react-router-dom";
import { CreditCard, Smartphone, Landmark, FileText, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = [
  {
    title: "Choose a course",
    desc: "Browse our available courses and select the one you want to enroll in.",
    link: "/courses",
    linkLabel: "View courses",
  },
  {
    title: "Pick a payment method",
    desc: "Select from the payment options below. Online payments give you immediate access upon completion.",
  },
  {
    title: "Complete your payment",
    desc: "Follow the steps for your chosen method. For non-online payments, include your full name and course title in the payment notes.",
  },
  {
    title: "Get your confirmation",
    desc: "You will receive a confirmation within 24 hours. Online payments grant immediate access to your course materials.",
  },
];

const methods = [
  {
    icon: CreditCard,
    title: "Credit / Debit Card",
    desc: "Secure online payment via Visa, Mastercard, and AMEX. Immediate access upon successful payment.",
    note: null,
  },
  {
    icon: Smartphone,
    title: "e-Transfer",
    desc: "Available for Canadian customers. Send your transfer and email us your confirmation to complete enrollment.",
    note: "Canadian customers only",
  },
  {
    icon: Landmark,
    title: "Bank Transfer",
    desc: "Direct bank transfer accepted. Contact us for banking details and include your name and course in the transfer notes.",
    note: null,
  },
  {
    icon: FileText,
    title: "Invoice",
    desc: "Available for company-sponsored enrollments. Reach out to request a formal invoice for your organization.",
    note: "Corporate sponsorships",
  },
];

const Payments = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Enrollment</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Ready to enroll?
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Getting started is straightforward. Follow the steps below and reach out if you need any help along the way.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-12">How it works</p>

          {/* Desktop */}
          <div className="hidden md:flex items-stretch">
            {steps.map((step, index) => (
              <>
                <div key={step.title} className="flex-1 flex flex-col items-center text-center px-4">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center mb-5 shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
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
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
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

      {/* Payment methods */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Payment options</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-14">
            We accept several methods.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {methods.map((method) => (
              <div key={method.title} className="flex gap-5">
                <div className="mt-0.5 shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <method.icon size={18} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {method.title}
                    </h3>
                    {method.note && (
                      <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
                        {method.note}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-12 max-w-xl">
            More payment options will be added soon. If your preferred method is not listed, contact us and we will do our best to accommodate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Have a question before enrolling?
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Our team is happy to help with anything related to payment or course selection.
          </p>
          <a
            href="mailto:info@ppapeng.ca"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Contact Us <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
            <span className="font-heading font-bold text-foreground">PPA P.Eng. Academy</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:info@ppapeng.ca" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail size={14} /> info@ppapeng.ca
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
