import { useState, useEffect, useRef, memo } from "react";
import { ArrowRight } from "lucide-react";

// Data based on the screenshot
const EXPERIENCE = [
  {
    id: "01",
    company: "ZC Digital",
    role: "Web Developer (Remote)",
    date: "2025 · 2026",
    description:
      "Development and maintenance of dynamic and high-performance websites. Integration of responsive user interfaces using HTML, CSS, Tailwind, and Bootstrap.",
  },
  {
    id: "02",
    company: "Digital Team",
    role: "Co-Founder & Operations Lead",
    date: "2024 · 2025",
    description:
      "Co-created and managed a team specializing in digital solutions, oversaw operations, and coordinated web and mobile projects.",
  },
  {
    id: "03",
    company: "Scientific Club (PI-Math), Boumerdes",
    role: "Trainer / Instructor",
    date: "2024 · 2025",
    description:
      "Delivered web development training sessions and mentored students on their technical projects, creating educational materials adapted to various levels.",
  },
  {
    id: "04",
    company: "Association EL AYYLA",
    role: "External Relations Manager",
    date: "2020 · 2025",
    description:
      "Managed partnerships and communication with external organizations. Organized events, coordinated with sponsors, and expanded the professional network.",
  },
  {
    id: "05",
    company: "Self-employed",
    role: "Freelance Developer",
    date: "2021 · 2024",
    description:
      "Designed and developed websites for various clients. Developed web applications with React, Next.js, and Node.js according to client specifications.",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Helper to toggle animation classes
  const getAnimClass = (baseClass) => {
    return isVisible ? "anim-visible" : baseClass;
  };

  return (
    <section
      ref={sectionRef}
      className="container w-full py-12 duration-500 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: Title, Intro, CTA */}
          <div className="relative flex flex-col items-start lg:col-span-5 xl:col-span-4">
            <div
              className={`sticky top-32 w-full anim-item ${getAnimClass(
                "anim-hidden-right"
              )}`}
            >
              {/* Huge Title */}
              <h1 className="mb-6 font-bold text-textColorWhite dark:text-white ">
                Practice
              </h1>

              {/* Subtitle */}
              <p className="max-w-md mb-8 text-lg leading-relaxed text-textColorDark dark:text-gray-400">
                My expertise ensures every project is executed with precision
                and creativity.
              </p>

              {/* Pill Button */}
              <button className="relative flex items-center p-2 pr-6 transition-all bg-white rounded-full shadow-sm group hover:shadow-md dark:bg-zinc-800">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white transition-transform duration-300 rounded-full bg-secondColor group-hover:scale-110">
                  <ArrowRight size={20} />
                </div>
                <span className="font-semibold text-textColorWhite dark:text-white">
                  Contact now
                </span>
              </button>
            </div>
          </div>

          {/* DECORATIVE DOT (Hidden on mobile, visible on desktop to match image) */}
          <div
            className={`hidden lg:flex lg:col-span-1 justify-center pt-24 anim-item delay-300 ${getAnimClass(
              "anim-scale-in"
            )}`}
          >
            <div className="w-4 h-4 mt-12 rounded-full shadow-lg bg-secondColor shadow-secondColor/20"></div>
          </div>

          {/* RIGHT COLUMN: Experience List */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="flex flex-col">
              {EXPERIENCE.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                    border-b border-gray-200 py-12 first:pt-0 dark:border-zinc-800
                    anim-item ${getAnimClass("anim-hidden-up")}
                  `}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    {/* Company Name */}
                    <h3 className="font-bold text-textColorWhite dark:text-white">
                      {item.company}
                    </h3>

                    {/* Date Pill */}
                    <span className="rounded-full bg-gray-200/50 px-4 py-1.5 text-sm font-medium text-textColorWhite dark:bg-zinc-800 dark:text-gray-300">
                      {item.date}
                    </span>
                  </div>

                  {/* Role */}
                  <h6 className="mb-4 font-semibold text-textColorWhite dark:text-gray-200">
                    {item.role}
                  </h6>

                  {/* Description */}
                  <p className="max-w-xl text-base leading-relaxed text-textColorDark dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
