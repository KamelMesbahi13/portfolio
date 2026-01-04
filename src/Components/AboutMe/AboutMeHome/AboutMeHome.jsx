import React, { useState, useEffect } from "react";
import {
  Code2,
  FileCode,
  Settings,
  Palette,
  ShoppingCart,
  Hexagon,
  Instagram,
  ArrowUpRight,
  X,
  CheckCircle2,
} from "lucide-react";
import mypicabout from "../../../assets/mypicabout.png";

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Full-Stack Web Development",
    summary:
      "I build fast, scalable, and visually appealing web applications using the MERN stack. From concept to deployment, I turn ideas into high-performing digital products.",
    details: [
      "MERN stack (MongoDB, Express, React, Node.js)",
      "Responsive UI with Tailwind CSS & Bootstrap",
      "RESTful API integration and state management (Redux)",
      "Multilingual websites (Arabic, French, English)",
      "Deployment on Render / Vercel with CI/CD setup",
    ],
  },
  {
    id: "02",
    icon: FileCode,
    title: "WordPress Development",
    summary:
      "I design and customize WordPress and WooCommerce websites that are modern, fast, and easy to manage. I also develop custom plugins to add unique features and improve functionality.",
    details: [
      "Custom WordPress & WooCommerce website creation",
      "Theme customization and plugin integration",
      "Development of custom plugins for unique features",
      "SEO-friendly, responsive, and secure design",
      "Training and long-term client support",
    ],
  },
  {
    id: "03",
    icon: Settings,
    title: "Website Maintenance & Optimization",
    summary:
      "I offer ongoing support to ensure your website stays optimized, secure, and aligned with your business goals.",
    details: [
      "Performance and security updates",
      "Bug fixes and feature enhancements",
      "Speed optimization and SEO improvements",
      "Regular backups and technical support",
    ],
  },
  {
    id: "04",
    icon: Palette,
    title: "UI/UX Design",
    summary:
      "I craft clean, modern, and user-friendly interfaces that provide seamless user experiences across all devices. I focus on clarity, consistency, and conversion.",
    details: [
      "Wireframes, mockups, and interactive prototypes",
      "Modern layouts using Figma & Tailwind CSS",
      "Responsive design & accessibility",
      "User testing and design iteration",
    ],
  },
  {
    id: "05",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    summary:
      "I create professional e-commerce solutions that help businesses sell online effectively — from product management to payment and order systems.",
    details: [
      "Custom online stores built with MERN / WooCommerce",
      "Product, order, and user management systems",
      "Multiple image upload and gallery integration",
      "Secure payments and responsive dashboards",
      "Optimized checkout and admin panels",
    ],
  },
  {
    id: "06",
    icon: Hexagon,
    title: "Branding & Logo Design",
    summary:
      "I help brands define their visual identity through creative logo design and consistent branding systems that reflect their mission and values.",
    details: [
      "Logo creation and brand guidelines",
      "Color palettes and typography systems",
      "Visual assets for marketing and social media",
      "Brand storytelling and identity alignment",
    ],
  },
  {
    id: "07",
    icon: Instagram,
    title: "Social Media Design & Content Creation",
    summary:
      "I design engaging social media posts, stories, and ad creatives that match your brand's identity and help attract the right audience.",
    details: [
      "Custom designs for Instagram, Facebook, and LinkedIn",
      "Ad creatives for marketing campaigns",
      "Story templates and carousel post design",
      "Consistent brand visuals and tone",
    ],
  },
];

const AboutSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedService(null);
      setIsClosing(false);
      document.body.style.overflow = "unset";
    }, 200);
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="w-full min-h-screen px-6 py-20 transition-colors duration-500 bg-lightBg dark:bg-darkBg md:px-12 lg:px-24">
      {/* 1. The Large Headline */}
      <div className="max-w-5xl mx-auto my-12 text-center md:my-20 md:text-left">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-[650px]">
        {/* LEFT COLUMN: Services List */}
        <div className="lg:col-span-5 relative h-[550px] lg:h-full overflow-hidden w-full">
          {/* Section Label */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-secondColor">
              Services I Offer
            </span>
          </div>

          {/* Top Gradient Fade */}
          <div className="absolute left-0 right-0 z-10 h-10 pointer-events-none top-12 bg-gradient-to-b from-lightBg dark:from-darkBg to-transparent" />

          {/* Scrolling Services Container */}
          <div className="h-[calc(100%-3rem)] overflow-hidden relative">
            <div className="flex flex-col gap-4 py-4 animate-vertical-scroll">
              {[...services, ...services].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={`${service.id}-${index}`}
                    onClick={() => openModal(service)}
                    className="p-5 transition-all duration-300 bg-white border border-gray-100 cursor-pointer group dark:bg-zinc-900 rounded-2xl dark:border-zinc-800 hover:border-secondColor/50 dark:hover:border-secondColor/50 hover:shadow-lg hover:shadow-secondColor/5"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 rounded-xl bg-secondColor/10 dark:bg-secondColor/20 group-hover:bg-secondColor">
                          <IconComponent
                            size={22}
                            className="transition-colors duration-300 text-secondColor group-hover:text-white"
                          />
                        </div>
                        <span className="block mt-2 font-mono text-xs text-center text-textColorDark dark:text-gray-600">
                          {service.id}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="transition-colors duration-300 text-textColorWhite dark:text-white group-hover:text-secondColor dark:group-hover:text-secondColor">
                            {service.title}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="flex-shrink-0 text-gray-400 transition-all duration-300 -translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                          />
                        </div>
                        <p className="text-sm leading-relaxed text-textColorDark dark:text-gray-400 line-clamp-2">
                          {service.summary}
                        </p>

                        {/* Tags/Details Preview */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {service.details.slice(0, 2).map((detail, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-gray-100 rounded-full dark:bg-zinc-800 text-textColorDark dark:text-gray-400"
                            >
                              {detail.length > 25
                                ? detail.substring(0, 25) + "..."
                                : detail}
                            </span>
                          ))}
                          {service.details.length > 2 && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondColor/10 dark:bg-secondColor/20 text-secondColor">
                              +{service.details.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-lightBg dark:from-darkBg via-lightBg/80 dark:via-darkBg/80 to-transparent" />
        </div>

        {/* RIGHT COLUMN: Large Portrait Image */}
        <div className="lg:col-span-7 h-[500px] lg:h-full w-full">
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

      {/* ========== PREMIUM MODAL ========== */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 animate-backdrop" />

          {/* Modal */}
          <div
            className={`relative w-full max-w-md ${
              isClosing ? "animate-modal-exit" : "animate-modal-enter"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden border shadow-2xl glass-effect rounded-3xl border-white/20 dark:border-zinc-700/50">
              {/* Modal Header */}
              <div className="relative p-6 pb-4">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-bl from-secondColor/10 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 bg-gray-100 rounded-full top-4 right-4 dark:bg-zinc-800 hover:bg-secondColor hover:text-white btn-lift"
                >
                  <X size={18} />
                </button>

                {/* Service Info */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-secondColor to-orange-400 animate-icon-pulse">
                    {React.createElement(selectedService.icon, {
                      size: 26,
                      className: "text-white",
                    })}
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold text-secondColor bg-secondColor/10 px-2.5 py-1 rounded-full mb-1">
                      Service {selectedService.id}
                    </span>
                    <h3 className="text-textColorWhite dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="px-6 pb-2">
                <p className="text-sm leading-relaxed text-textColorDark dark:text-gray-400">
                  {selectedService.summary}
                </p>
              </div>

              {/* Details Section */}
              <div className="p-6 pt-4">
                <p className="mb-3 text-xs font-semibold tracking-wider uppercase text-textColorDark dark:text-gray-500">
                  What's Included
                </p>
                <div className="space-y-2 max-h-[200px] overflow-y-auto modal-scrollbar pr-2">
                  {selectedService.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/50 animate-slide-in"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <CheckCircle2
                        size={18}
                        className="text-secondColor flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-textColorWhite dark:text-gray-300">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 pt-2">
                <button
                  onClick={closeModal}
                  className="w-full py-3.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-textColorWhite dark:text-white font-semibold hover:bg-secondColor hover:text-white transition-all duration-300 btn-lift btn-glow"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
