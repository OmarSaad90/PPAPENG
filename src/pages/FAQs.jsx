import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const categories = [
  {
    label: "General",
    faqs: [
      {
        q: "What is PPA P.Eng. Academy?",
        a: "PPA P.Eng. Academy is a subsidiary of PPA Consulting, a Canadian boutique firm specializing in construction consulting and advisory services.",
      },
      {
        q: "Who can benefit from your courses?",
        a: "Any engineer in Canada pursuing P.Eng. certification, whether you are a recent graduate entering the profession or an experienced engineer working toward your designation.",
      },
      {
        q: "Are courses province-specific?",
        a: "No. Our courses are aligned with Professional Engineering regulatory bodies across Canada, including PEO, APEGA, and others, so they apply regardless of which province you are writing in.",
      },
      {
        q: "Do you offer in-person classes?",
        a: "Currently, all courses are offered as a mix of online content and workshops.",
      },
    ],
  },
  {
    label: "Learning Experience",
    faqs: [
      {
        q: "What is your student success rate?",
        a: "100% of our students pass their P.Eng. exams on their first attempt after completing our courses.",
      },
      {
        q: "Is there a time limit to complete a course?",
        a: "Instructors provide personalized schedules based on your exam deadlines, so the pace is flexible and tailored to you.",
      },
      {
        q: "Is instructor support available throughout the course?",
        a: "Yes. Instructors follow up and guide students through the entire learning journey, not just during scheduled sessions.",
      },
      {
        q: "What happens if I do not pass my P.Eng. exam?",
        a: "You receive a full refund. We stand behind our courses completely -- if you completed the material and still did not pass, we will refund you in full.",
      },
    ],
  },
  {
    label: "Courses",
    faqs: [
      {
        q: "Are courses aligned with P.Eng. exams?",
        a: "Yes. Every course is designed specifically to align with the syllabus requirements set by provincial engineering bodies across Canada.",
      },
      {
        q: "Can I take multiple courses at the same time?",
        a: "Yes, you can enroll in multiple courses simultaneously based on your schedule and learning needs.",
      },
    ],
  },
  {
    label: "Enrollment and Payment",
    faqs: [
      {
        q: "How do I enroll?",
        a: "Browse our courses, then contact us through the Contact page or email us directly at charbel.abousamra@ppapeng.ca with the course you want and your name. We will confirm your spot and get you started quickly.",
      },
      {
        q: "Do you offer a refund if I do not pass?",
        a: "Yes. If you complete the course and do not pass your P.Eng. exam, you receive a full refund. No questions asked.",
      },
      {
        q: "Is there a guarantee?",
        a: "Yes. We have a 100% pass rate -- every student who has completed our courses has passed their P.Eng. exam on the first attempt. If that changes for you, you get your money back in full.",
      },
    ],
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-border">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 gap-6 group text-left"
    >
      <span className={`text-sm md:text-base font-medium transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
        {faq.q}
      </span>
      <ChevronDown
        size={18}
        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
      />
    </button>
    <div
      style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 300ms ease",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5 max-w-2xl">
          {faq.a}
        </p>
      </div>
    </div>
  </div>
);

const FAQs = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (key) => setOpenItems((prev) => {
    const next = new Set(prev);
    next.has(key) ? next.delete(key) : next.add(key);
    return next;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>FAQs | PPA P.Eng. Academy</title>
        <meta name="description" content="Answers to frequently asked questions about P.Eng. exam preparation, course content, enrollment, and certification requirements across Canadian provinces." />
        <link rel="canonical" href="https://www.ppapeng.ca/faqs" />
        <meta property="og:title" content="FAQs | PPA P.Eng. Academy" />
        <meta property="og:description" content="Answers to frequently asked questions about P.Eng. exam preparation and certification in Canada." />
        <meta property="og:url" content="https://www.ppapeng.ca/faqs" />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">FAQs</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Common questions.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Everything you need to know about our courses, enrollment, and how we work. Can not find an answer? Reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {categories.map((category) => (
            <div key={category.label}>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 border-b border-border pb-4">
                {category.label}
              </p>
              <div>
                {category.faqs.map((faq, i) => {
                  const key = `${category.label}-${i}`;
                  return (
                    <FAQItem
                      key={key}
                      faq={faq}
                      isOpen={openItems.has(key)}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="border-t border-border" style={{ backgroundColor: '#f7f4ef', backgroundImage: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Still have a question?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Our team is happy to help with anything not covered above.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Get in Touch <ArrowRight size={15} />
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

export default FAQs;
