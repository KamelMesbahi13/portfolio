/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState, memo } from "react";
import MyPic from "../../../assets/mypictwo.webp";
import {
  ArrowRight,
  Check,
  TrendingDown,
  BrainCircuit,
  Puzzle,
} from "lucide-react";

// ✅ Static data outside
const PARAGRAPHS = [
  {
    id: 1,
    content:
      "You need a developer who can build fast, modern, and scalable web solutions tailored to your business.",
  },
  {
    id: 2,
    content:
      "You feel stuck with a website that's slow, outdated, or impossible to manage.",
  },
  {
    id: 3,
    content:
      "You're losing clients because your online presence doesn't look professional or convert well.",
  },
];

const FEATURES = [
  {
    icon: TrendingDown,
    title: "Website Not Performing",
    description:
      "Your website isn't bringing results — it's slow, poorly designed, or not user-friendly, and it's hurting your business.",
  },
  {
    icon: BrainCircuit,
    title: "Tech Overload",
    description:
      "Managing your website, design, content, and social media alone is draining — you need someone who can handle the technical work professionally.",
  },
  {
    icon: Puzzle,
    title: "No Clear Digital Strategy",
    description:
      "You're unsure how to structure your site, improve the design, or scale it with the right tech — every change feels risky and time-consuming.",
  },
];

// ✅ Lightweight FeatureItem - CSS only
const FeatureItem = memo(
  ({ icon: Icon, title, description, index, isVisible }) => {
    return (
      <div
        className={`
        flex flex-col gap-3 group
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
      `}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="w-12 h-12 rounded-full border border-[#2a2826] dark:bg-[#0C2B4E]/30 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-[#F87B1B]">
          <Icon className="text-[#F87B1B] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-bold text-textColorWhite dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-textColorWhite dark:text-textColorDark">
          {description}
        </p>
      </div>
    );
  }
);

FeatureItem.displayName = "FeatureItem";

// ✅ Lightweight CheckItem - CSS only
const CheckItem = memo(({ item, index, isVisible }) => {
  return (
    <li
      className={`
        flex items-start gap-4
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
    >
      <div
        className={`
          mt-1 min-w-[24px] h-6 w-6 rounded-full bg-[#0C2B4E] 
          flex items-center justify-center border border-gray-700 
          cursor-pointer
          transition-all duration-500 ease-out
          hover:scale-125 hover:bg-[#F87B1B] hover:border-[#F87B1B]
          ${isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-180"}
        `}
        style={{ transitionDelay: `${600 + index * 150}ms` }}
      >
        <Check size={14} className="text-white" />
      </div>
      <p className="text-sm leading-relaxed textColorWhite dark:text-textColorDark">
        {item.content}
      </p>
    </li>
  );
});

CheckItem.displayName = "CheckItem";

// ✅ Lightweight Image Component - No blur effects
const HeroImage = memo(({ isVisible }) => {
  return (
    <div
      className={`
        relative h-full min-h-[400px] lg:min-h-[600px] w-full
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      style={{ transitionDelay: "300ms" }}
    >
      {/* Simplified hover effect - no blur */}
      <div className="relative w-full h-full overflow-hidden group rounded-3xl">
        {/* Simple glow - no blur */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F87B1B]/0 via-[#F87B1B]/20 to-[#F87B1B]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
          <img
            src={MyPic}
            alt="Mesbahi Kamel"
            className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 shadow-2xl rounded-3xl group-hover:scale-105"
            loading="lazy"
            width="600"
            height="800"
          />

          {/* Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#151312]/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-20" />
        </div>

        {/* Corner accents */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-4 border-b-4 border-[#F87B1B] rounded-br-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -top-2 -left-2 w-24 h-24 border-l-4 border-t-4 border-[#F87B1B] rounded-tl-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
});

HeroImage.displayName = "HeroImage";

// ✅ Main component - Single IntersectionObserver
const HomeAbout = () => {
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
    <div
      ref={sectionRef}
      className="container w-full mt-12 overflow-hidden md:mt-20"
    >
      <div>
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Title */}
            <h2
              className={`
                text-4xl font-bold leading-tight text-textColorWhite dark:text-white lg:text-5xl
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }
              `}
            >
              Struggling to Fix or Improve{" "}
              <span
                className={`
                  text-[#F87B1B] inline-block
                  transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                style={{ transitionDelay: "400ms" }}
              >
                Your Website?
              </span>
            </h2>

            {/* Button - CSS hover instead of whileHover */}
            <div
              className={`
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{ transitionDelay: "200ms" }}
            >
              <button className="group bg-[#F87B1B] hover:bg-[#e06a10] transition-all duration-300 text-white font-semibold rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-lg shadow-orange-900/20 hover:scale-[1.02] active:scale-[0.98]">
                <span>Let's Find</span>
                <div className="bg-white text-[#F87B1B] rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={3} />
                </div>
              </button>
            </div>

            {/* Check List */}
            <ul className="mt-4 space-y-6">
              {PARAGRAPHS.map((item, index) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </ul>
          </div>

          {/* Center - Image */}
          <HeroImage isVisible={isVisible} />

          {/* Right Column - Features */}
          <div className="space-y-10 lg:pl-4">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeAbout);
