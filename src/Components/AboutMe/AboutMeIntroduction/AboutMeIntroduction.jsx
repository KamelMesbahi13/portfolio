import { useState, useEffect, useRef, memo } from "react";

const AboutMeIntroduction = () => {
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
      className="container w-full pb-12 transition-colors duration-500 bg-lightBg dark:bg-darkBg md:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* LEFT COLUMN: Label */}
          <div className="relative md:col-span-3 lg:col-span-4">
            <div
              className={`md:sticky md:top-32 anim-item ${getAnimClass(
                "anim-hidden-up"
              )}`}
            >
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                About Me
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-9 lg:col-span-8">
            {/* Headline */}
            <h1
              className={`
                mb-8 md:mb-12 
                text-textColorWhite dark:text-white
                anim-item delay-200 ${getAnimClass("anim-hidden-right")}
              `}
            >
              I create strategic and visually compelling digital experiences
              that balance function and aesthetics
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6 text-base leading-relaxed md:space-y-8 md:text-lg lg:text-xl text-textColorDark dark:text-gray-400">
              <p
                className={`anim-item delay-400 ${getAnimClass(
                  "anim-hidden-up"
                )}`}
              >
                As a digital product designer, my focus is on creating intuitive
                user interfaces, seamless interactions, and cohesive brand
                identities that drive engagement and enhance usability. Whether
                it’s designing SaaS dashboards, mobile apps, or high-performance
                websites, my approach combines creativity with a deep
                understanding of user needs and business goals.
              </p>

              <p
                className={`anim-item delay-550 ${getAnimClass(
                  "anim-hidden-up"
                )}`}
              >
                Over the years, I’ve collaborated with startups, established
                companies, and entrepreneurs to bring their ideas to life
                through thoughtful design solutions. I believe that great design
                goes beyond aesthetics—it solves problems, simplifies
                complexity, and delivers meaningful experiences. From concept to
                final execution, I ensure every project is strategically crafted
                to leave a lasting impact.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-10 md:mt-14 anim-item delay-700 ${getAnimClass(
                "anim-hidden-up"
              )}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutMeIntroduction);
