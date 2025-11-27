import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
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

const skills = [
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
            <h1>My Stack</h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="max-w-md text-lg text-left text-gray-400 md:text-right"
          >
            Building scalable solutions with the latest technologies in the
            modern web ecosystem.
          </motion.p>
        </div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <SpotlightCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const SpotlightCard = ({ skill }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = skill.icon;

  return (
    <motion.div
      ref={divRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="relative h-full overflow-hidden border rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm group"
    >
      <div
        className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px group-hover:opacity-100"
        style={{
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
};

export default Technologies;
