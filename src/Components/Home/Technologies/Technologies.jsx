import { useState, useRef, useEffect, memo } from "react";
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

// ✅ Static data outside
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

// ✅ Lightweight SkillCard - Pure CSS transitions
const SkillCard = memo(({ skill, index, isVisible }) => {
  const Icon = skill.icon;

  return (
    <div
      className={`
        relative h-full overflow-hidden rounded-2xl border group
        transition-all duration-700 ease-out
        border-mainColor/25 bg-white shadow-md hover:shadow-lg hover:border-mainColor/35
        dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:border-white/20 dark:hover:scale-[1.02]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      id="tools"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Simple hover glow */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none
          bg-gradient-to-br from-secondColor/[0.06] via-transparent to-transparent
          dark:from-[#F87B1B]/10
        "
      />

      <div className="relative z-10 flex flex-col items-start h-full gap-6 p-6 md:p-8">
        {/* Icon and Title */}
        <div className="flex items-center gap-4">
          <div
            className="
              p-3 rounded-xl border text-[#F87B1B] 
              transition-all duration-300
              bg-mainColor/10 border-mainColor/20
              dark:bg-white/5 dark:border-white/10
              group-hover:scale-110 group-hover:bg-[#F87B1B] group-hover:text-white group-hover:border-[#F87B1B]
              group-hover:shadow-lg group-hover:shadow-[#F87B1B]/20
            "
          >
            <Icon size={28} />
          </div>
          <h3 className="text-lg text-textColorWhite dark:text-white">
            {skill.name}
          </h3>
        </div>

        {/* Divider */}
        <div
          className="
            w-full h-px bg-gradient-to-r transition-all duration-300
            from-mainColor/20 to-transparent
            dark:from-white/10
            group-hover:from-[#F87B1B]/30
          "
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag, i) => (
            <span
              key={i}
              className="
                text-xs font-medium px-3 py-1 rounded-full 
                border transition-all duration-300
                bg-mainColor/5 text-textColorWhite border-mainColor/15
                dark:bg-white/5 dark:text-gray-300 dark:border-white/5
                group-hover:border-[#F87B1B]/30 group-hover:bg-mainColor/10 dark:group-hover:bg-white/10
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Border glow on hover */}
      <div
        className="
          absolute inset-0 rounded-2xl border border-transparent 
          pointer-events-none transition-colors duration-300
          group-hover:border-[#F87B1B]/20
        "
      />
    </div>
  );
});

SkillCard.displayName = "SkillCard";

// ✅ Main Component - Single IntersectionObserver
const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Single observer for entire section
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
    <div className="py-12 overflow-hidden bg-transparent md:py-20">
      <div ref={sectionRef} className="container px-6 mx-auto">
        {/* Header */}
        <div
          className={`
            flex flex-col items-start justify-between gap-6 pb-12 mb-12 
            border-b md:flex-row md:items-end md:pb-20 
            border-mainColor/20 dark:border-white/10
            transition-all duration-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h1 className="text-textColorWhite dark:text-white">
            Skills & Technologies
          </h1>

          <p
            className={`
              max-w-md text-lg text-textColorWhite/70 dark:text-white/70
              transition-all duration-700 delay-100
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }
            `}
          >
            A blend of development, design, and digital creativity to craft
            modern and high-impact web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Technologies);
