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
        a: "An online learning platform dedicated to helping engineers across Canada prepare for their Professional Engineer (P.Eng.) certification exams.",
      },
      {
        q: "Who can benefit from your courses?",
        a: "Any engineer pursuing P.Eng. certification, whether you are a recent graduate or an experienced professional looking to obtain your designation.",
      },
      {
        q: "Are courses province-specific?",
        a: "No. Our courses are aligned with Professional Engineering regulatory bodies across Canada, including PEO, APEGA, and others, so they apply regardless of which province you are writing in.",
      },
      {
        q: "Do you offer in-person classes?",
        a: "Currently, all courses are offered as a mix of online content and workshops.",
      },
      {
        q: "What is your student success rate?",
        a: "100% of our students pass their P.Eng. exams on their first attempt after completing our courses.",
      },
    ],
  },
  {
    label: "Courses",
    faqs: [
      {
        q: "What engineering courses do you cover?",
        a: "We cover all major engineering fields. Civil engineering courses are available now, with electrical, mechanical, environmental, structural, and more being added soon.",
      },
      {
        q: "Are courses aligned with P.Eng. exams?",
        a: "Yes. Every course is designed specifically to align with the syllabus requirements set by provincial engineering bodies across Canada.",
      },
      {
        q: "Can I take multiple courses at the same time?",
        a: "Yes, you can enroll in multiple courses simultaneously based on your schedule and learning needs.",
      },
      {
        q: "What is included in a course?",
        a: "Each course includes interactive videos, quizzes, downloadable materials, and access to live Q&A sessions with instructors.",
      },
    ],
  },
  {
    label: "Enrollment and Payment",
    faqs: [
      {
        q: "How do I enroll?",
        a: "Select your course, go to the Payments page, choose your preferred payment method, and complete the transaction. Online card payments give you immediate access, while other methods are activated after payment verification.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept credit and debit cards (Visa, Mastercard, AMEX), Interac e-Transfer for Canadian customers, bank transfers, and invoicing for company-sponsored enrollments.",
      },
      {
        q: "When can I start after enrolling?",
        a: "Online card payments grant immediate access. For e-Transfer and bank transfers, access is provided once we verify the payment, typically within 24 hours.",
      },
    ],
  },
  {
    label: "Learning Experience",
    faqs: [
      {
        q: "Is there a time limit to complete a course?",
        a: "Instructors provide personalized schedules based on your exam deadlines, so the pace is flexible and tailored to you.",
      },
      {
        q: "Is instructor support available throughout the course?",
        a: "Yes. Instructors follow up and guide students through the entire learning journey, not just during scheduled sessions.",
      },
      {
        q: "Do I receive a certificate upon completion?",
        a: "Yes. Digital certificates are provided upon request for successfully completed courses.",
      },
      {
        q: "Can I access course materials offline?",
        a: "Yes. Many materials are downloadable so you can study at your own pace without needing an internet connection.",
      },
      {
        q: "What happens if I do not pass my P.Eng. exam?",
        a: "We are committed to your success. If you do not pass, we will work with you to provide additional support and resources to help you succeed on your next attempt.",
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
  const [openItem, setOpenItem] = useState(null);

  const toggle = (key) => setOpenItem((prev) => (prev === key ? null : key));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>FAQs | PPA P.Eng. Academy</title>
        <meta name="description" content="Answers to frequently asked questions about P.Eng. exam preparation, course content, enrollment, payments, and certification requirements across Canadian provinces." />
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
                      isOpen={openItem === key}
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
      <section className="border-t border-border bg-secondary">
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

export default FAQs;
