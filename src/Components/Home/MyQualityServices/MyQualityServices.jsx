/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
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

// ✅ Lightweight ServiceCard - Uses CSS transitions instead of Framer Motion
const ServiceCard = memo(({ service, isOpen, onToggle, isVisible, index }) => {
  return (
    <li
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-300
          ${
            isOpen
              ? "border-mainColor/40 bg-gradient-to-br from-mainColor/[0.08] to-mainColor/[0.03] shadow-lg dark:border-white/20 dark:bg-white/[0.08] dark:shadow-none dark:from-transparent dark:to-transparent"
              : "border-mainColor/25 bg-white shadow-md hover:bg-gradient-to-br hover:from-mainColor/[0.04] hover:to-white hover:shadow-lg hover:border-mainColor/35 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none dark:hover:bg-white/[0.05] dark:hover:border-white/15 dark:hover:from-transparent dark:hover:to-transparent"
          }
        `}
      >
        {/* Simplified gradient overlay - no animation */}
        {isOpen && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-secondColor/[0.06] via-transparent to-transparent dark:from-mainColor/10 dark:via-mainColor/5 dark:to-transparent" />
        )}

        <button
          onClick={onToggle}
          className="relative w-full px-6 text-left py-7 sm:px-8 sm:py-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 space-y-4">
              {/* ID and line */}
              <div className="flex items-center gap-4">
                <span
                  className={`text-xs font-bold tracking-[0.3em] transition-colors duration-300 ${
                    isOpen
                      ? "text-mainColor dark:text-white/90"
                      : "text-mainColor/60 dark:text-white/40"
                  }`}
                >
                  {service.id}
                </span>
                <div
                  className={`flex-1 h-px bg-gradient-to-r from-secondColor/50 to-transparent transition-all duration-300 origin-left ${
                    isOpen
                      ? "scale-x-100 opacity-60"
                      : "scale-x-[0.6] opacity-30"
                  }`}
                />
              </div>

              {/* Title */}
              <h2 className=" text-textColorWhite dark:text-white">
                {service.title}
              </h2>

              {/* Summary */}
              <p
                className={`pr-4 text-sm leading-relaxed md:text-base transition-colors duration-300 ${
                  isOpen
                    ? "text-textColorWhite dark:text-white/90"
                    : "text-textColorWhite/80 dark:text-white/60"
                }`}
              >
                {service.summary}
              </p>
            </div>

            {/* Toggle Icon - Only motion element */}
            <div className="shrink-0">
              <div
                className={`
                  flex items-center justify-center w-8 h-8 md:h-12 md:w-12 
                  border rounded-full transition-all duration-300
                  ${
                    isOpen
                      ? "border-mainColor/40 bg-mainColor/20 dark:border-white/30 dark:bg-white/10"
                      : "border-mainColor/30 bg-mainColor/10 dark:border-white/20 dark:bg-white/5"
                  }
                `}
              >
                <svg
                  className={`w-4 h-4 md:w-6 md:h-6 text-textColorWhite dark:text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Expandable Content - Only place we use AnimatePresence */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-8 sm:px-8">
                <div className="h-px mb-6 bg-gradient-to-r from-secondColor/50 via-secondColor/30 to-transparent" />

                <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-textColorWhite dark:text-white/90"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-secondColor" />
                      <span className="text-sm md:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom accent line */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 h-[2px] 
            bg-gradient-to-r from-transparent via-secondColor/50 to-transparent
            transition-all duration-300 origin-center
            ${isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"}
          `}
        />
      </div>
    </li>
  );
});

ServiceCard.displayName = "ServiceCard";

// ✅ Main component with single IntersectionObserver
const MyQualityServices = () => {
  const [open, setOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Single observer for the entire section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after visible
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggle = useCallback((index) => {
    setOpen((current) => (current === index ? null : index));
  }, []);

  return (
    <section
      id="services"
      className="relative pt-20 md:pt-28 text-textColorWhite dark:text-white"
    >
      <div className="max-w-6xl px-6 mx-auto">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-textColorWhite dark:text-white">
            My Quality Services
          </h1>

          <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-textColorWhite/70 dark:text-textColorDark">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>

          <div className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent" />
        </div>

        {/* Services List */}
        <ul className="mt-12 space-y-6 md:mt-16">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isOpen={open === i}
              onToggle={() => handleToggle(i)}
              isVisible={isVisible}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(MyQualityServices);
