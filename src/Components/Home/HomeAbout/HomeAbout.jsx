import React, { useState, useRef, useEffect } from "react";
import { Lightbulb, Zap, Palette, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver setup
  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Expertise/Features data
  const expertiseItems = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Strategic Development",
      description:
        "Architecting scalable solutions with modern frameworks and clean code principles that stand the test of time.",
    },
    {
      id: 2,
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Building lightning-fast applications with optimized bundles, lazy loading, and efficient state management.",
    },
    {
      id: 3,
      icon: Palette,
      title: "Design Excellence",
      description:
        "Crafting pixel-perfect interfaces with meticulous attention to detail, animation, and user experience.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 py-20 overflow-hidden transition-colors duration-500 bg-lightBg dark:bg-darkBg lg:py-32 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ========== Header Section ========== */}
        <header
          className={`mb-16 lg:mb-24 max-w-4xl transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
        >
          <p
            className={`text-secondColor font-medium tracking-widest uppercase text-sm mb-6
              transition-all duration-500 delay-100
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
          >
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="text-textColorDark">Transforming ideas into </span>
            <span className="text-textColorWhite dark:text-white">
              exceptional digital experiences
            </span>
            <span className="text-textColorDark">
              {" "}
              through innovative design & development.
            </span>
          </h2>
        </header>

        {/* ========== Main Grid Layout ========== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ===== Left Column - Expertise List (5 columns) ===== */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {expertiseItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.id}
                  className={`group relative p-6 lg:p-7 rounded-2xl 
                    bg-white dark:bg-white/5 
                    border border-gray-100 dark:border-white/10
                    hover:border-secondColor/30 dark:hover:border-secondColor/30
                    hover:shadow-xl hover:shadow-secondColor/5
                    dark:hover:shadow-secondColor/10
                    cursor-pointer
                    transition-all duration-500 ease-out
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index + 1) * 150}ms`
                      : "0ms",
                  }}
                >
                  {/* Card Content */}
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div
                      className="flex-shrink-0 p-3.5 rounded-xl 
                        bg-secondColor/10 dark:bg-secondColor/20 
                        text-secondColor
                        group-hover:bg-secondColor group-hover:text-white
                        transition-all duration-300"
                    >
                      <IconComponent size={22} strokeWidth={1.75} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold transition-colors duration-300 text-textColorWhite dark:text-white group-hover:text-mainColor dark:group-hover:text-secondColor">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="flex-shrink-0 transition-all duration-300 -translate-x-2 translate-y-2 opacity-0 text-textColorDark group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-textColorDark dark:text-textColorDark lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-0.5 
                      bg-gradient-to-r from-secondColor to-mainColor
                      scale-x-0 group-hover:scale-x-100
                      origin-left transition-transform duration-500"
                  />
                </article>
              );
            })}

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-4 mt-4 transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              {[
                { value: "5+", label: "Years Exp." },
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 text-center bg-white border border-gray-100 rounded-xl dark:bg-white/5 dark:border-white/10"
                >
                  <p className="text-2xl font-bold lg:text-3xl text-mainColor dark:text-secondColor">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs lg:text-sm text-textColorDark">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Right Column - Portrait Image (7 columns) ===== */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="relative h-[450px] sm:h-[550px] lg:h-[680px] xl:h-[720px] group">
              {/* Main Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Professional portrait"
                  className="object-cover object-center w-full h-full transition-all duration-700 ease-out scale-100 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-mainColor/40 via-transparent to-transparent opacity-60 group-hover:opacity-30" />

                {/* Bottom Info Card */}
                <div className="absolute p-5 transition-all duration-500 ease-out translate-y-4 border opacity-0 bottom-6 left-6 right-6 rounded-2xl bg-white/90 dark:bg-darkBg/90 backdrop-blur-md border-white/20 dark:border-white/10 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg font-semibold text-textColorWhite dark:text-white">
                    John Doe
                  </p>
                  <p className="text-sm text-textColorDark">
                    Senior Frontend Developer & UI Designer
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -z-10 -top-4 -right-4 w-full h-full 
                  rounded-[2.5rem] border-2 border-secondColor/20 dark:border-secondColor/30
                  group-hover:border-secondColor/40
                  transition-colors duration-500"
              />

              {/* Floating Badge */}
              <div
                className={`absolute -left-4 lg:-left-6 top-1/4 
                  px-4 py-2 rounded-full 
                  bg-secondColor text-white 
                  text-sm font-medium
                  shadow-lg shadow-secondColor/30
                  transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
              >
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
