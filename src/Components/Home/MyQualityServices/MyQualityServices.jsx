import { useEffect, useRef, useState, memo, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// ✅ Move services outside component (created once)
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

// ✅ Move animation variants outside (created once)
const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const staggerContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
      delayChildren: 0,
    },
  },
};

// ✅ Custom hook for reveal (unchanged)
const useReveal = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// ✅ Memoize ServiceCard
// eslint-disable-next-line no-unused-vars
const ServiceCard = memo(({ service, index, isOpen, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useReveal(0.15);
  const isActive = isHovered || isOpen;
  const isHoveredAndOpen = isHovered && isOpen;

  // ✅ Memoize handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.div
        animate={{
          y: isActive ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-mainColor/10 via-mainColor/5 to-transparent"
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 bg-[#0C2B4E]"
          animate={{
            opacity: isOpen ? (isHoveredAndOpen ? 0.4 : 0.25) : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isActive
              ? "inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 40px -10px rgba(0, 0, 0, 0.4)"
              : "inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        <button
          onClick={onToggle}
          className="relative w-full px-6 text-left py-7 sm:px-8 sm:py-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <motion.span
                  animate={{
                    color: isActive
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-bold tracking-[0.3em]"
                >
                  {service.id}
                </motion.span>
                <motion.div
                  className="flex-1 h-px bg-gradient-to-r from-secondColor/50 to-transparent"
                  animate={{
                    scaleX: isActive ? 1 : 0.6,
                    opacity: isActive ? 0.6 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              </div>

              <motion.h3
                animate={{
                  x: isActive ? 2 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-2xl font-bold md:text-3xl lg:text-4xl"
              >
                {service.title}
              </motion.h3>

              <motion.p
                animate={{
                  color: isActive
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="pr-4 text-sm leading-relaxed md:text-base"
              >
                {service.summary}
              </motion.p>
            </div>

            <motion.div
              animate={{
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="shrink-0"
            >
              <motion.div
                className="flex items-center justify-center w-8 h-8 border rounded-full md:h-12 md:w-12 border-white/20 bg-white/5 backdrop-blur-sm"
                animate={{
                  borderColor: isActive
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(255,255,255,0.15)",
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.05)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                    animate={{
                      strokeWidth: isActive ? 2.5 : 2,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: {
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
            },
            opacity: {
              duration: 0.4,
              delay: isOpen ? 0.1 : 0.1,
              ease: "easeInOut",
            },
          }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-8 sm:px-8">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: isOpen ? 1 : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                scaleX: {
                  duration: 0.5,
                  delay: isOpen ? 0.1 : 0,
                  ease: [0.32, 0.72, 0, 1],
                },
                opacity: {
                  duration: 0.4,
                  delay: isOpen ? 0.1 : 0,
                },
              }}
              className="h-px mb-6 origin-left bg-gradient-to-r from-secondColor/50 via-secondColor/30 to-transparent"
            />

            <motion.ul
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={staggerContainerVariants}
              className="space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0"
            >
              {service.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  variants={listItemVariants}
                  className="flex items-start gap-3 text-white/90"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-secondColor" />
                  <span className="text-sm md:text-base">{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mainColor/50 to-transparent"
          animate={{
            opacity: isActive ? 1 : 0,
            scaleX: isActive ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.li>
  );
});

ServiceCard.displayName = "ServiceCard";

// ✅ Main component
const MyQualityServices = () => {
  const [open, setOpen] = useState(null);
  const { ref, isVisible } = useReveal(0.1);

  // ✅ Memoize toggle handler
  const handleToggle = useCallback((index) => {
    setOpen((current) => (current === index ? null : index));
  }, []);

  return (
    <section id="services" className="relative pt-20 text-white md:pt-28">
      <div className="max-w-6xl px-6 mx-auto">
        <div ref={ref} className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            My Quality Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-white/70"
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </motion.p>

          <div className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent" />
        </div>

        <ul className="mt-12 space-y-6 md:mt-16">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isOpen={open === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(MyQualityServices);
