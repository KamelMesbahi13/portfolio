import * as Accordion from "@radix-ui/react-accordion";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, memo, useCallback } from "react";

// ✅ Static FAQ Data
const FAQ_DATA = [
  {
    id: "1",
    question: "What services do you offer?",
    answer:
      "I build high-quality digital solutions including modern MERN websites, custom WordPress & WooCommerce stores, branding and logo design, social media content creation, and complete marketing services.",
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer:
      "It depends on the project. A modern one-page or business website can take 1–4 days. A full e-commerce store usually takes 1–3 weeks. Custom MERN applications vary based on features.",
  },
  {
    id: "3",
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the project type. Business websites start at affordable rates, e-commerce stores and custom systems have flexible pricing. I always give a clear, transparent quote before starting.",
  },
  {
    id: "4",
    question: "Do you provide support after the project is done?",
    answer:
      "Absolutely. I offer ongoing support, maintenance, updates, hosting help, content changes, security, and performance optimization.",
  },
  {
    id: "5",
    question: "Can you also manage my social media?",
    answer:
      "Yes, I create professional content, graphics, videos, and post strategies that help your brand grow. I handle everything from design to captions to posting.",
  },
  {
    id: "6",
    question: "How do we start working together?",
    answer:
      "Very simple — send me a message, book a free consultation, or share your project idea. I will guide you and help you choose the best solution for your goals and budget.",
  },
];

// ✅ Simple Static Icons
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5V19M5 12H19" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6L18 18" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

// ✅ Lightweight FAQ Item - CSS transitions + minimal motion
const FAQItem = memo(({ item, isOpen, index, isVisible }) => {
  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <Accordion.Item value={item.id} className="mb-4">
        <div
          className={`
            group overflow-hidden rounded-xl border transition-all duration-300
            ${
              isOpen
                ? "border-white/15 bg-white/[0.08]"
                : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
            }
          `}
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-5 text-left sm:px-8">
              <span className="text-base font-medium text-white/90 md:text-lg lg:text-[17px] leading-snug">
                {item.question}
              </span>
              <div className="ml-4 transition-colors duration-300 shrink-0 text-white/50 group-hover:text-white">
                <div
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-lg border 
                    transition-all duration-300
                    ${
                      isOpen
                        ? "border-white/20 bg-white/10 rotate-0"
                        : "border-transparent rotate-0"
                    }
                  `}
                >
                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    {isOpen ? <CloseIcon /> : <PlusIcon />}
                  </div>
                </div>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          {/* Only AnimatePresence for accordion - this is essential */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <Accordion.Content forceMount asChild>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-8 text-white/60 text-sm leading-relaxed md:text-[15px]">
                    {item.answer}
                  </div>
                </motion.div>
              </Accordion.Content>
            )}
          </AnimatePresence>
        </div>
      </Accordion.Item>
    </div>
  );
});

FAQItem.displayName = "FAQItem";

// ✅ Lightweight Sidebar - Pure CSS animations
const Sidebar = memo(({ isVisible }) => {
  return (
    <div
      className={`
        h-auto rounded-3xl border border-white/10 bg-white/[0.03] p-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
      `}
      style={{ transitionDelay: "200ms" }}
    >
      {/* Star Icon - CSS animation instead of spring */}
      <div
        className={`
          relative flex items-center justify-center mb-6 shadow-lg h-14 w-14 
          rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/20
          transition-all duration-500 ease-out
          ${isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-180"}
        `}
        style={{ transitionDelay: "400ms" }}
      >
        <StarIcon />
      </div>

      {/* Title */}
      <h3
        className={`
          mb-3 text-xl font-bold text-white
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "500ms" }}
      >
        Still have any Questions?
      </h3>

      {/* Description */}
      <p
        className={`
          mb-8 text-[15px] leading-relaxed text-white/60
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "600ms" }}
      >
        Let's collaborate to create an exceptional website that sets you apart
        from the competition. Contact me today to discuss your web design needs.
      </p>

      {/* Button */}
      <button
        className={`
          w-full sm:w-auto rounded-xl bg-[#6D28D9] px-8 py-3.5 
          text-sm font-semibold text-white 
          transition-all duration-300 ease-out
          hover:bg-[#5B21B6] hover:shadow-lg hover:shadow-purple-500/25
          hover:scale-[1.02] active:scale-[0.98]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "700ms" }}
      >
        Contact Me
      </button>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

// ✅ Main Component - Single IntersectionObserver
const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState("1");
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

  const handleValueChange = useCallback((value) => {
    setOpenItem(value);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container min-h-screen px-4 py-12 overflow-hidden text-white md:py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div
          className={`
            mb-16 text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p
            className={`
              text-lg text-white/50 mt-4 transition-all duration-700 ease-out
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}
            style={{ transitionDelay: "100ms" }}
          >
            Here are answers to some common questions
          </p>
          <div
            className={`
              h-px max-w-xs mx-auto mt-8 origin-center 
              bg-gradient-to-r from-transparent via-secondColor/50 to-transparent
              transition-all duration-700 ease-out
              ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
            `}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Accordion List */}
          <div
            className={`
              lg:col-span-8 transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }
            `}
          >
            <div className="rounded-3xl border border-white/[0.05] bg-white/[0.01] p-6 sm:p-8">
              <Accordion.Root
                type="single"
                collapsible
                value={openItem}
                onValueChange={handleValueChange}
              >
                {FAQ_DATA.map((item, index) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openItem === item.id}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </Accordion.Root>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FAQAccordion);
