import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { disciplines } from "@/data/courses";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import coursesHeaderImg from "@/assets/Book.webp";

const Courses = () => {
  const available = disciplines.filter(d => d.status === 'available');
  const coming = disciplines.filter(d => d.status === 'coming-soon');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>All P.Eng. Courses | PPA P.Eng. Academy</title>
        <meta name="description" content="Browse all P.Eng. exam preparation courses by engineering field. Civil, electrical, mechanical, mechatronics, and complementary studies courses available for engineers across Canada." />
        <link rel="canonical" href="https://www.ppapeng.ca/courses" />
        <meta property="og:title" content="All P.Eng. Courses | PPA P.Eng. Academy" />
        <meta property="og:description" content="Browse all P.Eng. exam preparation courses by engineering field. Available across all Canadian provinces." />
        <meta property="og:url" content="https://www.ppapeng.ca/courses" />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section
        className="relative flex items-end border-b border-border"
        style={{
          height: '320px',
          backgroundImage: `url(${coursesHeaderImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>All Courses</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Find your course.
          </h1>
          <p className="text-foreground text-lg max-w-xl leading-relaxed">
            We offer P.Eng. exam preparation across all major engineering fields. Select a course below to get started.
          </p>
        </div>
      </section>

      {/* Discipline list */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="divide-y divide-border">
          {disciplines.map((discipline, index) => {
            const isAvailable = discipline.status === 'available';

            if (isAvailable) {
              return (
                <Link
                  key={discipline.id}
                  to={`/courses/${discipline.id}`}
                  className="flex items-center justify-between py-8 gap-6 group"
                >
                  <div className="flex items-center gap-8 md:gap-12 min-w-0">
                    <span className="text-4xl md:text-5xl font-bold font-heading tabular-nums text-foreground/10 group-hover:text-primary/25 transition-colors duration-300 shrink-0 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                        {discipline.name}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">{discipline.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="hidden md:block text-sm text-muted-foreground">
                      {discipline.courses.length} {discipline.courses.length === 1 ? 'course' : 'courses'}
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-primary group-hover:translate-x-1.5 transition-transform duration-200"
                    />
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={discipline.id}
                className="flex items-center justify-between py-8 gap-6"
              >
                <div className="flex items-center gap-8 md:gap-12 min-w-0">
                  <span className="text-4xl md:text-5xl font-bold font-heading tabular-nums text-foreground/[0.06] shrink-0 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground/40 mb-1">
                      {discipline.name}
                    </h2>
                    <p className="text-muted-foreground/50 text-sm leading-relaxed">{discipline.description}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-secondary">
                  Coming Soon
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border mt-8">
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

export default Courses;
