import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const disciplines = [
  { label: "Civil Engineering", to: "/courses/civil" },
  { label: "Electrical Engineering", to: "/courses/electrical" },
  { label: "Mechanical Engineering", to: "/courses/mechanical" },
  { label: "Mechatronics Engineering", to: "/courses/mechatronics" },
  { label: "Complementary Studies", to: "/courses/complementary-studies" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setCoursesOpen(false), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-foreground text-lg tracking-tight">
          PPA <span className="text-primary">P.Eng.</span> Academy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>

          {/* Courses dropdown */}
          <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
              <ChevronDown size={14} className={`transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`} />
            </Link>

            {coursesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-border rounded-xl shadow-lg py-2 z-50">
                <Link
                  to="/courses"
                  className="block px-4 py-2 text-xs font-medium text-primary tracking-widest uppercase hover:bg-secondary transition-colors"
                  onClick={() => setCoursesOpen(false)}
                >
                  All Courses
                </Link>
                <div className="my-1 border-t border-border" />
                {disciplines.map((d) => (
                  <Link
                    key={d.to}
                    to={d.to}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setCoursesOpen(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Link to="/enroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Enroll
          </Link>
          <Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </Link>
        </nav>

        <Link
          to="/courses"
          className="hidden md:inline-flex items-center bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            Home
          </Link>

          {/* Mobile courses expandable */}
          <div>
            <button
              onClick={() => setMobileCoursesOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
              <ChevronDown size={14} className={`transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileCoursesOpen && (
              <div className="mt-2 pl-3 flex flex-col gap-3 border-l-2 border-primary/20">
                <Link to="/courses" className="text-xs font-medium text-primary tracking-widest uppercase" onClick={() => setOpen(false)}>
                  All Courses
                </Link>
                {disciplines.map((d) => (
                  <Link
                    key={d.to}
                    to={d.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            Testimonials
          </Link>
          <Link to="/enroll" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            Enroll
          </Link>
          <Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <Link
            to="/courses"
            className="inline-flex justify-center bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
