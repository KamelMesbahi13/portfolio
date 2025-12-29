import React from "react";
import {
  Globe,
  Smartphone,
  Palette,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

// Your actual services from the website
const services = [
  {
    id: 1,
    icon: Globe,
    title: "Web Development",
    description:
      "Creating responsive, high-performance websites tailored to your business needs using the latest technologies.",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "App Development",
    description:
      "Building intuitive mobile applications for iOS and Android that deliver seamless user experiences.",
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing beautiful, user-centered interfaces that enhance engagement and drive conversions.",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "SEO",
    description:
      "Optimizing your digital presence to improve search rankings and increase organic traffic.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 transition-colors duration-500 bg-lightBg dark:bg-darkBg md:px-12 lg:px-24">
      {/* 1. The Large Headline */}
      <div className="max-w-5xl mx-auto mb-20 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight">
          <span className="text-textColorDark dark:text-gray-500">
            I craft strategic, visually compelling digital experiences{" "}
          </span>
          <span className="text-textColorWhite dark:text-white">
            that drive impact and engagement
          </span>
        </h2>
      </div>

      {/* 2. The Two-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-[600px]">
        {/* LEFT COLUMN: Services List */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-full overflow-hidden w-full">
          {/* Section Label */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-secondColor">
              What I Do
            </span>
          </div>

          {/* Top Gradient Fade */}
          <div className="absolute left-0 right-0 z-10 h-8 pointer-events-none top-12 bg-gradient-to-b from-lightBg dark:from-darkBg to-transparent"></div>

          {/* Scrolling Services Container */}
          <div className="h-[calc(100%-3rem)] overflow-hidden relative">
            <div className="flex flex-col gap-4 py-4 animate-vertical-scroll">
              {[...services, ...services].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={`${service.id}-${index}`}
                    className="p-5 transition-all duration-300 bg-white border border-gray-100 cursor-pointer group dark:bg-zinc-900 rounded-2xl dark:border-zinc-800 hover:border-secondColor/50 dark:hover:border-secondColor/50 hover:shadow-lg hover:shadow-secondColor/5"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors duration-300 rounded-xl bg-secondColor/10 dark:bg-secondColor/20 group-hover:bg-secondColor">
                        <IconComponent
                          size={22}
                          className="transition-colors duration-300 text-secondColor group-hover:text-white"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold transition-colors duration-300 text-textColorWhite dark:text-white group-hover:text-secondColor dark:group-hover:text-secondColor">
                            {service.title}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="text-gray-400 transition-all duration-300 -translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                          />
                        </div>
                        <p className="text-sm leading-relaxed text-textColorDark dark:text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-lightBg dark:from-darkBg via-lightBg/80 dark:via-darkBg/80 to-transparent"></div>
        </div>

        {/* RIGHT COLUMN: Large Portrait Image */}
        <div className="lg:col-span-7 h-[500px] lg:h-full w-full">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop"
              alt="Portrait"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
            />

            {/* Overlay with info on hover */}
            <div className="absolute p-5 transition-all duration-500 translate-y-4 border border-gray-200 opacity-0 bottom-6 left-6 right-6 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm dark:border-zinc-700 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-lg font-semibold text-textColorWhite dark:text-white">
                Your Name
              </p>
              <p className="text-sm text-textColorDark dark:text-gray-400">
                Full Stack Developer & Designer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles for the custom scrolling animation */}
      <style>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 30s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
