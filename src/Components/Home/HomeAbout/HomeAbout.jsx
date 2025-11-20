import React from "react";
import { Code, Server, Palette } from "lucide-react";
// import { exp } from "three/tsl";

const HomeAbout = () => {
  const cards = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following industry best practices and standards.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend Expertise",
      description:
        "Building robust APIs and server-side logic with Node.js, Express, and MongoDB.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Modern Design",
      description:
        "Creating beautiful, responsive interfaces that provide excellent user experiences.",
    },
  ];

  const highlights = [
    "Experienced in building full-stack web applications from scratch.",
    "Strong problem-solving skills with attention to detail.",
    "Continuously learning new technologies and frameworks.",
  ];

  return (
    <div className="min-h-screen bg-[#151312] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6 lg:pt-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                About Me as a{" "}
                <span className="text-[#F87B1B]">MERN Developer</span>
              </h1>
            </div>

            <button className="bg-[#F87B1B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e06a0a] transition-all duration-300 flex items-center gap-2 shadow-lg">
              Let's Talk
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <div className="space-y-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0C2B4E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:w-80 xl:w-96 h-[450px] bg-[#0C2B4E] rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#F87B1B] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">Your Photo Here</p>
                  <p className="text-gray-500 text-xs mt-2">
                    Replace with your image
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Cards */}
          <div className="space-y-4 lg:pt-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#0C2B4E] bg-opacity-40 backdrop-blur-sm p-5 rounded-2xl border border-[#0C2B4E] hover:border-[#F87B1B] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#F87B1B] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all">
                    <span className="text-[#F87B1B]">{card.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
