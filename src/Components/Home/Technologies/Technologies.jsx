import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Globe,
  Palette,
  Database,
  Terminal,
  Smartphone,
  GitGraph,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Arch",
    icon: Layers,
    tags: ["React", "Next.js", "Redux Toolkit"],
  },
  {
    name: "UI Engineering",
    icon: Palette,
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    name: "Backend Logic",
    icon: Cpu,
    tags: ["Node.js", "Express", "REST APIs"],
  },
  {
    name: "Database",
    icon: Database,
    tags: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    name: "Web Standards",
    icon: Globe,
    tags: ["HTML5", "SEO", "Accessibility"],
  },
  {
    name: "DevOps & Tools",
    icon: Terminal,
    tags: ["Docker", "Webpack", "Vite"],
  },
  {
    name: "Mobile Dev",
    icon: Smartphone,
    tags: ["React Native", "Responsive Design"],
  },
  {
    name: "Version Control",
    icon: GitGraph,
    tags: ["Git", "GitHub Actions", "CI/CD"],
  },
];

const Skills = () => {
  return (
    <section className="relative py-32 overflow-hidden selection:bg-[#F87B1B] selection:text-white">
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F87B1B] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-end justify-between gap-6 pb-8 mb-20 border-b md:flex-row border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F87B1B] to-orange-200">
                Stack
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-lg text-right text-gray-400 md:text-left"
          >
            Building scalable solutions with the latest technologies in the
            modern web ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SpotlightCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ skill, index }) => {
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
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative h-full rounded-2xl border border-white/10 bg-[#0f355f]/50 backdrop-blur-sm overflow-hidden group"
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
              className="text-xs font-medium px-3 py-1 rounded-full bg-[#0C2B4E] text-gray-300 border border-white/5 group-hover:border-[#F87B1B]/30 transition-colors"
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

export default Skills;
