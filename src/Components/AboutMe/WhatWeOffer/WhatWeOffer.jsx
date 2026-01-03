import { useState, useEffect, useRef, memo } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "UI/UX Design", // Matching your screenshot order
    summary:
      "I craft clean, modern, and user-friendly interfaces that provide seamless user experiences across all devices.",
    details: [
      "Wireframes, mockups, and prototypes",
      "Modern layouts using Figma",
      "Responsive design & accessibility",
      "User testing and design iteration",
    ],
  },
  {
    id: "02",
    title: "Graphic Design",
    summary:
      "Visual storytelling that communicates your brand message effectively through creative graphic solutions.",
    details: [
      "Marketing materials & brochures",
      "Social media graphics",
      "Infographics & visual data",
      "Print design assets",
    ],
  },
  {
    id: "03",
    title: "Web Design",
    summary:
      "Designing engaging websites that balance aesthetics with functionality to drive conversions.",
    details: [
      "Landing page design",
      "Website redesigns",
      "Design systems & style guides",
      "Interactive elements",
    ],
  },
  {
    id: "04",
    title: "Branding",
    summary:
      "Defining visual identity through creative logo design and consistent branding systems.",
    details: [
      "Logo creation & guidelines",
      "Color palettes & typography",
      "Brand strategy & positioning",
      "Visual identity packages",
    ],
  },
  {
    id: "05",
    title: "Full-Stack Web Development",
    summary:
      "Building fast, scalable web applications using the MERN stack from concept to deployment.",
    details: [
      "MERN stack (MongoDB, Express, React, Node)",
      "API integration & database design",
      "Performance optimization",
      "Secure deployment",
    ],
  },
  {
    id: "06",
    title: "WordPress Development",
    summary:
      "Custom WordPress solutions that are easy to manage, secure, and SEO-friendly.",
    details: [
      "Theme customization",
      "Plugin development",
      "E-commerce (WooCommerce)",
      "Site maintenance",
    ],
  },
  {
    id: "07",
    title: "Social Media Content",
    summary:
      "Engaging content creation that grows your audience and enhances brand visibility.",
    details: [
      "Content strategy",
      "Reels & Story design",
      "Ad creatives",
      "Copywriting support",
    ],
  },
];

const WhatWeOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openService, setOpenService] = useState(null); // Tracks open accordion
  const sectionRef = useRef(null);

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Helper to toggle animation classes
  const getAnimClass = (baseClass) => {
    return isVisible ? "anim-visible" : baseClass;
  };

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full pb-12 transition-colors duration-500 pt-28 bg-lightBg dark:bg-darkBg container mt-[10rem] md:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* LEFT COLUMN: Label (Sticky) */}
          <div className="relative md:col-span-3 lg:col-span-4">
            <div
              className={`md:sticky md:top-32 anim-item ${getAnimClass(
                "anim-hidden-up"
              )}`}
            >
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                What We Offer
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="md:col-span-9 lg:col-span-8">
            {/* 1. Headline */}
            <h1
              className={`
                mb-12 md:mb-16  
                 text-textColorWhite dark:text-white
                anim-item delay-200 ${getAnimClass("anim-hidden-right")}
              `}
            >
              We provide comprehensive digital solutions tailored to your unique
              business needs
            </h1>

            {/* 2. Accordion List */}
            <div className="border-t border-gray-200 dark:border-zinc-800">
              {SERVICES.map((service, index) => {
                const isOpen = openService === service.id;

                return (
                  <div
                    key={service.id}
                    className={`
                      border-b border-gray-200 dark:border-zinc-800 
                      anim-item ${getAnimClass("anim-hidden-up")}
                    `}
                    // Stagger animation delay for list items
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleService(service.id)}
                      className="flex items-center justify-between w-full py-6 text-left group md:py-8"
                    >
                      <div className="flex items-baseline gap-4 md:gap-6">
                        {/* Number */}
                        <span
                          className={`text-lg font-mono transition-colors duration-300 ${
                            isOpen
                              ? "text-secondColor"
                              : "text-gray-400 dark:text-gray-600"
                          }`}
                        >
                          {service.id}.
                        </span>

                        {/* Title */}
                        <h3
                          className={`text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                            isOpen
                              ? "text-secondColor"
                              : "text-textColorWhite dark:text-white group-hover:text-secondColor"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Chevron Icon */}
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-300 text-gray-400 group-hover:text-secondColor ${
                          isOpen ? "rotate-180 text-secondColor" : ""
                        }`}
                      />
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-8 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-0 md:pl-[3.5rem] lg:pl-[4.5rem] grid gap-6 md:grid-cols-2">
                          {/* Summary */}
                          <div>
                            <p className="text-base leading-relaxed text-textColorDark dark:text-gray-400">
                              {service.summary}
                            </p>
                          </div>

                          {/* Details List */}
                          <div>
                            <ul className="space-y-2">
                              {service.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-textColorWhite dark:text-gray-300"
                                >
                                  <ArrowUpRight
                                    size={16}
                                    className="mt-0.5 text-secondColor shrink-0"
                                  />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhatWeOffer);
