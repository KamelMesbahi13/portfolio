import { useState, useEffect, useRef, memo } from "react";
import { ArrowRight } from "lucide-react";

// Data based on the screenshot
const EXPERIENCE = [
  {
    id: "01",
    company: "Clavmen",
    role: "Senior UX Designer",
    date: "2021 - Present",
    description:
      "Clavmen inspires creativity and makes learning piano fun. The lightweight body fits easily into gig bags for portability.",
  },
  {
    id: "02",
    company: "Losify & Co",
    role: "Lead Product Designer",
    date: "2019 - 2021",
    description:
      "Fitness and well-being with personalized coaching and innovative wellness solutions.",
  },
  {
    id: "03",
    company: "Freelance",
    role: "Full Stack Developer",
    date: "2017 - 2019",
    description:
      "Collaborated with various clients to deliver custom web solutions, focusing on performance and user experience.",
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
              <h1 className="mb-6 text-6xl font-bold tracking-tighter text-textColorWhite dark:text-white md:text-7xl lg:text-8xl">
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
                    <h3 className="text-3xl font-bold text-textColorWhite dark:text-white">
                      {item.company}
                    </h3>

                    {/* Date Pill */}
                    <span className="rounded-full bg-gray-200/50 px-4 py-1.5 text-sm font-medium text-textColorWhite dark:bg-zinc-800 dark:text-gray-300">
                      {item.date}
                    </span>
                  </div>

                  {/* Role */}
                  <h4 className="mb-4 text-lg font-semibold text-textColorWhite dark:text-gray-200">
                    {item.role}
                  </h4>

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
