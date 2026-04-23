import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ArrowLeft, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { disciplines } from "@/data/courses";
import Navbar from "@/components/Navbar";

const CourseDiscipline = () => {
  const { disciplineId } = useParams();
  const discipline = disciplines.find(d => d.id === disciplineId);
  const [openCourse, setOpenCourse] = useState(null);

  const toggle = (id) => setOpenCourse(prev => (prev === id ? null : id));

  if (!discipline) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Course not found.</p>
            <Link to="/courses" className="text-primary text-sm hover:underline">
              Back to all courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{discipline.name} P.Eng. Courses | PPA P.Eng. Academy</title>
        <meta name="description" content={`P.Eng. exam preparation courses for ${discipline.name.toLowerCase()} engineers across Canada. ${discipline.description} Aligned with PEO, APEGA, APEGBC, and all Canadian provincial engineering bodies.`} />
        <link rel="canonical" href={`https://www.ppapeng.ca/courses/${disciplineId}`} />
        <meta property="og:title" content={`${discipline.name} P.Eng. Courses | PPA P.Eng. Academy`} />
        <meta property="og:description" content={`P.Eng. exam preparation courses for ${discipline.name.toLowerCase()} engineers across Canada.`} />
        <meta property="og:url" content={`https://www.ppapeng.ca/courses/${disciplineId}`} />
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="relative pt-36 pb-16 bg-secondary border-b border-border overflow-hidden">
        {discipline.headerImage && (
          <>
            <img src={discipline.headerImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-black transition-colors mb-8 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
          >
            <ArrowLeft size={14} /> All Courses
          </Link>
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>
            {discipline.name}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {discipline.courses.length} {discipline.courses.length === 1 ? 'course' : 'courses'} available.
          </h1>
          <p className="text-foreground text-lg max-w-2xl leading-relaxed">
            {discipline.description} All courses are aligned with the latest P.Eng. exam requirements across Canadian provincial bodies.
          </p>
        </div>
      </section>

      {/* Course accordion */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-24">
        <div className="divide-y divide-border">
          {discipline.courses.map((course, index) => {
            const isOpen = openCourse === course.id;
            return (
              <div key={course.id}>
                {/* Course row */}
                <button
                  onClick={() => toggle(course.id)}
                  className="w-full flex items-center justify-between py-7 gap-6 group text-left"
                >
                  <div className="flex items-center gap-8 md:gap-12">
                    <span
                      className={`text-4xl md:text-5xl font-bold font-heading tabular-nums shrink-0 select-none transition-colors duration-300 ${
                        isOpen ? 'text-primary/40' : 'text-foreground/10 group-hover:text-primary/20'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-3">
                      {course.icon && (
                        <course.icon
                          size={18}
                          className={`shrink-0 transition-colors duration-200 ${
                            isOpen ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                          }`}
                        />
                      )}
                      <h2
                        className={`font-heading text-lg md:text-xl font-semibold transition-colors duration-200 ${
                          isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'
                        }`}
                      >
                        {course.title}
                      </h2>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : 'group-hover:text-foreground'
                    }`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 320ms ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div className="pb-10 pl-0 md:pl-24">
                      <div className="border-l-2 border-primary pl-6">
                        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                          {course.summary}
                        </p>

                        {course.topics && course.topics.length > 0 && (
                          <div className="mb-8">
                            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                              Main topics covered
                            </p>
                            <ul className="space-y-2">
                              {course.topics.map(topic => (
                                <li key={topic} className="flex items-start gap-3 text-sm text-foreground">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <a
                          href="/enroll"
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
                        >
                          Enroll Now <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

export default CourseDiscipline;
