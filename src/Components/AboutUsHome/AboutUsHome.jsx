import React from "react";

// Dummy data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah T",
    role: "Founder of NovaTech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Working with Michael was a game-changer for our product. His ability to merge strategy with stunning visuals made our platform not only beautiful but incredibly user-friendly.",
  },
  {
    id: 2,
    name: "David Reynolds",
    role: "CEO of Horizon",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Michael took our vision and transformed it into a seamless digital experience. His attention to detail and design expertise elevated our brand beyond expectations.",
  },
  {
    id: 3,
    name: "James Miller",
    role: "Founder of EchoWear",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Michael's branding work gave our startup a distinct identity that truly resonates with our audience. His designs are not only visually compelling but strategically impactful.",
  },
  {
    id: 4,
    name: "Emily R",
    role: "Director at ArtFlow",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "The strategic approach Michael brings to design is unmatched. He doesn't just make things look good; he makes them work.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 transition-colors duration-500 bg-lightBg dark:bg-darkBg md:px-12 lg:px-24">
      {/* 1. The Large Headline */}
      <div className="max-w-5xl mx-auto mb-20 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight">
          <span className="text-textColorDark dark:text-gray-500">
            Michael Carter crafts strategic, visually compelling digital
            experiences{" "}
          </span>
          <span className="text-textColorWhite dark:text-white">
            that drive impact and engagement
          </span>
        </h2>
      </div>

      {/* 2. The Two-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-[600px]">
        {/* LEFT COLUMN: Scrolling Testimonials */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-full overflow-hidden w-full">
          {/* Top Gradient Fade */}
          <div className="absolute top-0 left-0 right-0 z-10 h-10 pointer-events-none bg-gradient-to-b from-lightBg dark:from-darkBg to-transparent"></div>

          {/* Scrolling Content Container */}
          <div className="flex flex-col gap-6 py-4 animate-vertical-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col gap-4 p-6 transition-colors duration-300 bg-white border border-gray-100 shadow-sm dark:bg-zinc-900 rounded-2xl dark:shadow-none dark:border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="object-cover w-10 h-10 rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-textColorWhite dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-textColorDark dark:text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-textColorWhite dark:text-gray-300 md:text-base">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-lightBg dark:from-darkBg via-lightBg/80 dark:via-darkBg/80 to-transparent"></div>
        </div>

        {/* RIGHT COLUMN: Large Portrait Image */}
        <div className="lg:col-span-7 h-[500px] lg:h-full w-full">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop"
              alt="Portrait"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out grayscale hover:grayscale-0"
            />
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
          animation: vertical-scroll 40s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
