import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Palette,
  Puzzle,
  Layers,
  Server,
  Database,
  Globe,
  Brush,
  GitGraph,
} from "lucide-react";
import mypicabout from "../../../assets/mypicabout.png";

const SKILLS = [
  {
    name: "MERN Development",
    icon: Code2,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
  {
    name: "WordPress Development",
    icon: Puzzle,
    tags: ["Theme Customization", "Plugins", "WooCommerce"],
    featured: true, // ← Changed to true
  },
  {
    name: "Frontend Engineering",
    icon: Layers,
    tags: ["React", "Vite", "Redux Toolkit", "Tailwind CSS"],
    featured: true,
  },
  {
    name: "Web Design",
    icon: Palette,
    tags: ["UI/UX", "Figma", "Modern Layouts"],
    featured: false,
  },
  {
    name: "Backend Logic",
    icon: Server,
    tags: ["REST APIs", "Express.js", "Authentication"],
    featured: false,
  },
  {
    name: "Database Systems",
    icon: Database,
    tags: ["MongoDB", "Mongoose", "SQL Basics"],
    featured: false,
  },
  {
    name: "SEO & Web Standards",
    icon: Globe,
    tags: ["SEO", "Performance", "Accessibility"],
    featured: false,
  },
  {
    name: "Social Media Design",
    icon: Brush,
    tags: ["Branding", "Content Creation", "Canva/Photoshop"],
    featured: false,
  },
  {
    name: "Version Control",
    icon: GitGraph,
    tags: ["Git", "GitHub", "CI/CD"],
    featured: false,
  },
];

// Custom Hook for Scroll Animation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Animated Skill Card Component
const SkillCard = ({ skill, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const IconComponent = skill.icon;

  return (
    <div
      ref={ref}
      className={`
        ${skill.featured ? "md:col-span-2" : "col-span-1"}
        p-5 transition-all duration-500 bg-white border border-gray-100 
        group dark:bg-zinc-900 rounded-2xl dark:border-zinc-800 
        hover:shadow-xl hover:shadow-secondColor/10
        hover:-translate-y-1
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`flex ${
          skill.featured ? "flex-row items-center gap-5" : "flex-col gap-4"
        }`}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <div
            className={`
              flex items-center justify-center transition-all duration-300 rounded-2xl 
              bg-gradient-to-br from-secondColor/10 to-secondColor/5 
              dark:from-secondColor/20 dark:to-secondColor/10 
              group-hover:from-secondColor group-hover:to-orange-500
              group-hover:shadow-lg group-hover:shadow-secondColor/25
              group-hover:scale-110
              ${skill.featured ? "w-16 h-16" : "w-12 h-12"}
            `}
          >
            <IconComponent
              size={skill.featured ? 28 : 22}
              className="transition-colors duration-300 text-secondColor group-hover:text-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4
            className={`
              font-semibold transition-colors duration-300 
              text-textColorWhite dark:text-white 
              group-hover:text-secondColor dark:group-hover:text-secondColor
              ${skill.featured ? "text-base mb-2" : "text-sm mb-3"}
            `}
          >
            {skill.name}
          </h4>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`
                  px-2.5 py-1 text-xs font-medium rounded-lg
                  bg-gray-100 dark:bg-zinc-800 
                  text-textColorDark dark:text-gray-400
                  transition-all duration-300
                  group-hover:bg-secondColor/10 group-hover:text-secondColor
                  dark:group-hover:bg-secondColor/20 dark:group-hover:text-secondColor
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Section Title
const AnimatedTitle = ({ children, subtitle }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`
        mb-8 transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondColor/10 text-secondColor">
        {subtitle}
      </span>
      {children}
    </div>
  );
};

const AboutSection = () => {
  const [headlineRef, headlineVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  return (
    <section className="w-full min-h-screen px-6 py-20 overflow-hidden transition-colors duration-500 md:px-12 lg:px-24">
      {/* 1. The Large Headline */}
      <div
        ref={headlineRef}
        className={`
          max-w-5xl mx-auto my-12 text-center md:my-20 md:text-left
          transition-all duration-1000
          ${
            headlineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        <h1>
          <span className="text-textColorDark dark:text-gray-500">
            I craft strategic, visually compelling digital experiences{" "}
          </span>
          <span className="text-textColorWhite dark:text-white">
            that drive impact and engagement
          </span>
        </h1>
      </div>

      {/* 2. The Two-Column Grid */}
      <div className="grid items-start h-auto grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-12 lg:min-h-[700px]">
        {/* LEFT COLUMN: Skills & Tech Stack */}
        <div className="w-full h-auto lg:col-span-5">
          <AnimatedTitle subtitle="Skills & Tech Stack">
            <h2 className="text-2xl font-bold text-textColorWhite dark:text-white">
              Technologies I Work With
            </h2>
          </AnimatedTitle>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SKILLS.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>

          {/* Bottom Stats */}
          <div
            className={`
    grid grid-cols-3 gap-4 mt-6 p-5 rounded-2xl
    bg-white dark:bg-zinc-900
    border border-gray-200 dark:border-zinc-800
    shadow-sm
  `}
          >
            {[
              { number: "4+", label: "Years Experience" },
              { number: "30+", label: "Projects Done" },
              { number: "25+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`
        text-center
        ${index !== 2 ? "border-r border-gray-200 dark:border-zinc-700" : ""}
      `}
              >
                <p className="text-2xl font-bold text-secondColor">
                  {stat.number}
                </p>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={imageRef}
          className={`
    lg:col-span-7 h-[500px] lg:h-full w-full
    transition-all duration-1000 delay-300
    ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
  `}
        >
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group">
            <img
              src={mypicabout}
              alt="Portrait"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
            />

            {/* Overlay with info on hover */}
            <div className="absolute p-5 transition-all duration-500 translate-y-4 border border-gray-200 opacity-0 bottom-6 left-6 right-6 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm dark:border-zinc-700 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-textColorWhite dark:text-white">
                    Kamel Mesbahi
                  </p>
                  <p className="text-sm text-textColorDark dark:text-gray-400">
                    Full Stack Developer & Designer
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                    <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full" />
                  </span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
