import { useEffect, useRef, useState, memo } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";

// ✅ Move static data outside
const ROLES = ["DEVELOPER", "DESIGNER", "FREELANCER"];
const STATS = [
  { value: 4, label1: "YEARS OF", label2: "EXPERIENCE" },
  { value: 30, label1: "PROJECTS", label2: "COMPLETED" },
  { value: 25, label1: "SATISFIED", label2: "CLIENTS" },
];

// ✅ Memoize Counter component
const Counter = memo(({ from = 0, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.floor);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
});

Counter.displayName = "Counter";

// ✅ TypewriterText - EXACT SAME as original but memoized
const TypewriterText = memo(({ words, interval = 2500, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={className}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
});

TypewriterText.displayName = "TypewriterText";

// ✅ Memoize StatCard component
const StatCard = memo(({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
        <p>
          +<Counter to={stat.value} />
        </p>
      </div>
      <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
        <p>{stat.label1}</p>
        <p>{stat.label2}</p>
      </div>
    </motion.div>
  );
});

StatCard.displayName = "StatCard";

// ✅ Main component
const HeroFirstContent = () => {
  return (
    <div className="space-y-4 md:container">
      <div>
        <div className="mb-3 md:mb-4">
          <div className="flex flex-col -space-y-4 leading-none">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[2.5rem] md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter"
            >
              <p className="text-white">WEB</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[2.5rem] md:!-mt-[40px] !-mt-[17px] md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter"
            >
              <p className="text-mainColor">
                <TypewriterText
                  words={ROLES}
                  interval={2500}
                  className="inline-block"
                />
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:text-lg">
            Full-stack MERN developer dedicated to crafting efficient, scalable,
            and visually appealing web solutions that bring ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-0 md:pt-0 lg:gap-12">
        {STATS.map((stat, index) => (
          <StatCard key={stat.label1} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(HeroFirstContent);
