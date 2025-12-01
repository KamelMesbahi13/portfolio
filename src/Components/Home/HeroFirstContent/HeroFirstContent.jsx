import { useEffect, useRef, useState, memo } from "react";

// ✅ Static data outside
const ROLES = ["DEVELOPER", "DESIGNER", "FREELANCER"];
const STATS = [
  { value: 4, label1: "YEARS OF", label2: "EXPERIENCE" },
  { value: 30, label1: "PROJECTS", label2: "COMPLETED" },
  { value: 25, label1: "SATISFIED", label2: "CLIENTS" },
];

// ✅ Lightweight Counter - Pure JS, no Framer Motion
const Counter = memo(({ to, isVisible }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * to);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, to]);

  return <span>{count}</span>;
});

Counter.displayName = "Counter";

// ✅ Lightweight TypewriterText - CSS transitions instead of blur filter
const TypewriterText = memo(({ words, interval = 2500, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsAnimating(false);
      }, 300); // Half of transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`
        inline-block transition-all duration-300 ease-out
        ${
          isAnimating
            ? "opacity-0 translate-y-4 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }
        ${className}
      `}
    >
      {words[index]}
    </span>
  );
});

TypewriterText.displayName = "TypewriterText";

// ✅ Lightweight StatCard - CSS only
const StatCard = memo(({ stat, index, isVisible }) => {
  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${400 + index * 100}ms` }}
    >
      <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
        <p>
          +<Counter to={stat.value} isVisible={isVisible} />
        </p>
      </div>
      <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
        <p>{stat.label1}</p>
        <p>{stat.label2}</p>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";

// ✅ Main component - Single IntersectionObserver
const HeroFirstContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Single observer for entire hero section
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-4 md:container">
      <div>
        <div className="mb-3 md:mb-4">
          <div className="flex flex-col -space-y-4 leading-none">
            {/* WEB Title */}
            <div
              className={`
                text-[2.5rem] md:text-6xl lg:text-6xl xl:text-[6rem] 
                font-black tracking-tighter
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }
              `}
            >
              <p className="text-white">WEB</p>
            </div>

            {/* Typewriter Role */}
            <div
              className={`
                text-[2.5rem] md:!-mt-[40px] !-mt-[17px] 
                md:text-6xl lg:text-6xl xl:text-[6rem] 
                font-black tracking-tighter
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }
              `}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-mainColor">
                <TypewriterText
                  words={ROLES}
                  interval={2500}
                  className="inline-block"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className={`
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:text-lg">
            Full-stack MERN developer dedicated to crafting efficient, scalable,
            and visually appealing web solutions that bring ideas to life.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 pt-0 md:pt-0 lg:gap-12">
        {STATS.map((stat, index) => (
          <StatCard
            key={stat.label1}
            stat={stat}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(HeroFirstContent);
