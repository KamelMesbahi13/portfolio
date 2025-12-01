/* eslint-disable no-unused-vars */
import { useState, useRef, memo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Code2,
  Globe,
  Palette,
  Database,
  Server,
  GitGraph,
  Puzzle,
  Brush,
} from "lucide-react";

// ✅ 1. Move static data outside
const SKILLS = [
  {
    name: "MERN Development",
    icon: Code2,
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "WordPress Development",
    icon: Puzzle,
    tags: ["Theme Customization", "Plugins", "WooCommerce"],
  },
  {
    name: "Frontend Engineering",
    icon: Layers,
    tags: ["React", "Vite", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    name: "Web Design",
    icon: Palette,
    tags: ["UI/UX", "Figma", "Modern Layouts"],
  },
  {
    name: "Backend Logic",
    icon: Server,
    tags: ["REST APIs", "Express.js", "Authentication"],
  },
  {
    name: "Database Systems",
    icon: Database,
    tags: ["MongoDB", "Mongoose", "SQL Basics"],
  },
  {
    name: "SEO & Web Standards",
    icon: Globe,
    tags: ["SEO", "Performance", "Accessibility"],
  },
  {
    name: "Social Media Design",
    icon: Brush,
    tags: ["Branding", "Content Creation", "Canva/Photoshop"],
  },
  {
    name: "Version Control",
    icon: GitGraph,
    tags: ["Git", "GitHub", "CI/CD"],
  },
];

// ✅ 2. Move variants outside
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ✅ 3. Optimized SpotlightCard (Mouse event throttling removed for CSS var approach)
const SpotlightCard = memo(({ skill }) => {
  const divRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Using simple state for position is fine for individual cards
  // But added useCallback to be safe
  const handleMouseMove = useCallback((e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={divRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full overflow-hidden border rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm group"
    >
      {/* Optimized Gradient Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(248, 123, 27, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-start h-full gap-6 p-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#F87B1B] group-hover:scale-110 group-hover:bg-[#F87B1B] group-hover:text-white transition-all duration-300">
            <Icon size={28} />
          </div>
          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>

        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-[#F87B1B]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#F87B1B]/20 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
});

SpotlightCard.displayName = "SpotlightCard";

// ✅ 4. Main Component
const Technologies = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <div className="py-12 overflow-hidden bg-transparent md:py-20">
      <div className="container px-6 mx-auto">
        <div
          ref={headerRef}
          className="flex flex-col items-start justify-between gap-6 pb-12 mb-12 border-b md:flex-row md:items-end md:pb-20 border-white/10"
        >
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h1>Skills & Technologies</h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="max-w-md text-lg text-white/70"
          >
            A blend of development, design, and digital creativity to craft
            modern and high-impact web experiences.
          </motion.p>
        </div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {SKILLS.map((skill, index) => (
            <SpotlightCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Technologies);
