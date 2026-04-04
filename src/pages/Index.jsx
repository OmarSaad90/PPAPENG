import Navbar from "@/components/Navbar";
import heroImage from "@/assets/Hero.jpg";
import aboutImage from "@/assets/Home2.webp";
import { ArrowRight, BookOpen, Users, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Engineering learning environment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="max-w-xl">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              P.Eng. Exam Preparation in Canada
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Your path to
              <br />
              <span className="text-gradient">P.Eng. certification.</span>
            </h1>
            <p className="text-foreground text-lg leading-relaxed max-w-md mb-10">
              Expert-led courses designed for aspiring Professional Engineers across every Canadian province.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/courses"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Explore Courses <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4">
                <p className="text-primary text-sm font-medium tracking-widest uppercase">Who we are</p>
                <div className="mt-1.5 h-0.5 w-8 bg-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6">
                An academy built around <span className="text-gradient">your exam.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PPA P.Eng. Academy prepares engineers for their Professional Engineer certification across Canada, whether you are writing through PEO, APEGA, or any other provincial body.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our courses span multiple engineering fields and are continuously updated to match the latest syllabus requirements. Every course is led by licensed professionals who have been through the process themselves.
              </p>
              <a
                href="/courses"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                See what we offer <ArrowRight size={14} />
              </a>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Engineers at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we teach */}
      <section className="py-14" style={{ backgroundColor: '#f7f4ef', backgroundImage: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="mb-3">
              <p className="text-primary text-sm font-medium tracking-widest uppercase">What we teach</p>
              <div className="mt-1.5 h-0.5 w-8 bg-primary mx-auto" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Engineering courses for the real exam.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We cover all engineering fields. Whether you are in civil, electrical, mechanical, environmental, or any other field, our courses are built to prepare you for your P.Eng. certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                icon: BookOpen,
                title: "Multi-field coverage",
                desc: "Courses across civil, electrical, transportation, environmental, and more. All tailored to P.Eng. exam requirements.",
              },
              {
                icon: Users,
                title: "Expert-led instruction",
                desc: "Every course is taught by licensed engineers with real-world experience and deep exam knowledge.",
              },
              {
                icon: GraduationCap,
                title: "Flexible, self-paced learning",
                desc: "Study on your schedule with 24/7 access to materials, practice exams, and live Q&A support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 md:p-10 flex flex-col"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse All Courses <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to start preparing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get in touch with our team or explore courses at your own pace.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Courses <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Request a Callback
            </a>
          </div>

          <div className="soft-line mb-10" />

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-6">
            <span className="font-heading font-bold text-foreground text-base">PPA P.Eng. Academy</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a href="mailto:info@ppapeng.ca" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} /> info@ppapeng.ca
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone size={14} /> +1 (437) 299-0347
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> Toronto, ON
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
