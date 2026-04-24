import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const testimonials = [
  {
    name: "Walid Merad",
    discipline: "Engineering Economics",
    quote: "I attended the 11-CS-1 Engineering Economics course with Charbel, and to keep it short, I achieved a 95% mark. Charbel's way of teaching was concise and accurate, making basic mathematics easier to follow and finance/management concepts accessible even if you are not familiar with them. I highly recommend Charbel if you want to achieve the results you are aiming for.",
  },
  {
    name: "Ghanasyam Sathya",
    discipline: "Transportation Engineering",
    quote: "Thank you so much, Charbel, for the classes. I truly appreciate the effort you put into explaining every part of the Transportation course materials. I am not saying this just for the sake of it, from the bottom of my heart, you are definitely a great teacher. Your classes clearly reflected the effort you put in to help us understand the concepts. Wishing you all the best for your upcoming classes and future endeavors.",
  },
  {
    name: "Osama Alhallaq",
    discipline: "Engineering Economics",
    quote: "Charbel, I'm happy to share my experience from the Engineering Economics course. I found the course to be very well organized and closely aligned with what is expected for the P.Eng. exam. The way you explained the concepts made them much easier to grasp, especially topics that initially felt quite challenging. What stood out most to me was the practical approach and the use of clear examples, which helped connect theory to real exam-type problems. I'm also pleased to share that I passed the exam with full marks, which I believe reflects how effective the course was in preparing me. Thank you for your support and dedication throughout the course. I would definitely recommend it to anyone preparing for their P.Eng.",
  },
  {
    name: "Yihia Saqallah",
    discipline: "Engineering Economics",
    quote: "Thank you Charbel! I had the chance to enroll in the P.Eng. Engineering Economics preparation course, and it was a very rewarding experience. The course was organized, focused, and closely tailored to the exam content. What stood out the most was how clearly the concepts were explained, along with practical examples that simplified challenging topics. The sessions helped me build confidence and develop a more strategic approach to the exam. I would definitely recommend this course to anyone working toward their P.Eng. designation.",
  },
  {
    name: "Tinu Thomas, P.Eng.",
    discipline: "Engineering Economics",
    quote: "I took the P.Eng. prep course in Engineering Economics with Charbel, and it was a really great experience. The course was well organized, practical, and focused on what actually shows up on the exam. What helped me the most was how clear and easy to follow the explanations were, along with the real-life examples that made tough topics much easier to understand. After the sessions, I felt more confident and better prepared, and I had a much clearer plan for how to approach the exam. I would definitely recommend this course to anyone getting ready for their P.Eng.",
  },
  {
    name: "Harshraj Chauhan",
    discipline: "Hydraulics Engineering",
    quote: "I had the opportunity to take the Hydraulics Engineering P.Eng. preparation course with Charbel, and it was a very positive experience. The course was well organized, practical, and closely aligned with the exam requirements. What stood out most was the clear explanations and relevant examples, which made complex concepts much easier to grasp. The sessions greatly boosted my confidence and helped me approach the exam in a more structured and effective way. I would definitely recommend this course to anyone preparing for their P.Eng.",
  },
  {
    name: "Nilush Abeygoonaratne",
    discipline: "Transportation Planning and Engineering",
    quote: "I recently completed a Transportation Planning and Engineering course with Charbel in preparation for my PEO technical exam, and I can't recommend him highly enough. Having been away from this type of technical material since graduating, I was honestly a bit apprehensive going in. Charbel's structured approach immediately put me at ease -- the course was well-organized, the topics flowed logically, and it was clear from day one that there was a deliberate plan behind every session. What stood out most was his teaching style. Charbel was great at breaking down complex concepts in a way that's genuinely easy to follow, and he never made me feel rushed when I needed something explained a second time. Walking into my final exam, I felt confident and well-prepared. Thank you, Charbel.",
  },
  {
    name: "Hassan Alame",
    discipline: "Civil Engineering",
    quote: "I had the opportunity to take the P.Eng. preparation for four courses (Highway Engineering, Transportation Planning, Engineering Economics, and Hydraulic Engineering) with Charbel, and it was an excellent experience. Two of these were previously recorded, and I had the chance to attend two live sessions. In both cases, the recordings were extremely helpful to prepare for the exams. Charbel introduces a strategy for each course chapter by chapter, provides clear content and guides you through exercises down to the last detail. I would highly recommend these courses to anyone preparing for their P.Eng.",
  },
];

const Testimonials = () => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PPA P.Eng. Academy",
    "url": "https://www.ppapeng.ca",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": testimonials.length.toString(),
      "reviewCount": testimonials.length.toString(),
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": t.quote,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Student Success Stories | P.Eng. Exam Prep | PPA P.Eng. Academy</title>
        <meta name="description" content="Real P.Eng. exam success stories from engineers across Canada. 100% first-attempt pass rate. Civil, transportation, hydraulics, and economics courses." />
        <link rel="canonical" href="https://www.ppapeng.ca/testimonials" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Student Success Stories | PPA P.Eng. Academy" />
        <meta property="og:description" content="Engineers across Canada share their results after passing the P.Eng. exam with PPA P.Eng. Academy. 100% pass rate." />
        <meta property="og:url" content="https://www.ppapeng.ca/testimonials" />
        <meta property="og:image" content="https://www.ppapeng.ca/logo.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Success Stories | PPA P.Eng. Academy" />
        <meta name="twitter:description" content="Engineers across Canada share their results after passing the P.Eng. exam with PPA P.Eng. Academy." />
        <meta name="twitter:image" content="https://www.ppapeng.ca/logo.png" />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
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
                <div key={i} className="border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" style={{ backgroundColor: '#f7f4ef' }}>
                  <span className="text-primary font-bold leading-none select-none" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</span>
                  <p className="text-foreground text-sm leading-relaxed">{t.quote}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    {t.discipline && (
                      <p className="text-primary text-xs mt-0.5">{t.discipline}</p>
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

export default Testimonials;
