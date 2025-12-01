import * as Accordion from "@radix-ui/react-accordion";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

const faqData = [
  {
    id: "1",
    question: "What services do you offer?",
    answer:
      "I build high-quality digital solutions including modern MERN websites, custom WordPress & WooCommerce stores, branding and logo design, social media content creation, and complete marketing services. From design to development to ads — I handle everything your business needs to grow online.",
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer:
      "It depends on the project. A modern one-page or business website can take 1–4 days. A full e-commerce store usually takes 1–3 weeks. Custom MERN applications vary based on features. I always deliver fast while keeping quality at the highest level.",
  },
  {
    id: "3",
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the project type. Business websites start at affordable rates, e-commerce stores and custom systems have flexible pricing, and branding/social media packages are tailored to fit your needs. I always give a clear, transparent quote before starting.",
  },
  {
    id: "4",
    question: "Do you provide support after the project is done?",
    answer:
      "Absolutely. I offer ongoing support, maintenance, updates, hosting help, content changes, security, and performance optimization. You can choose a monthly package or one-time support — whatever works best for you.",
  },
  {
    id: "5",
    question: "Can you also manage my social media?",
    answer:
      "Yes, I create professional content, graphics, videos, and post strategies that help your brand grow. I handle everything from design to captions to posting — so you focus on your business.",
  },
  {
    id: "6",
    question: "How do we start working together?",
    answer:
      "Very simple — send me a message, book a free consultation, or share your project idea. I will guide you, explain everything clearly, and help you choose the best solution for your goals and budget.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const FAQItem = ({ item, isOpen, index, isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Accordion.Item value={item.id} className="mb-4">
        <div
          className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
            isOpen
              ? "border-white/10 bg-white/[0.08]"
              : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
          }`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-5 text-left sm:px-8">
              <span className="text-base font-medium text-white/90 md:text-lg lg:text-[17px] leading-snug">
                {item.question}
              </span>
              <div className="ml-4 transition-colors shrink-0 text-white/50 group-hover:text-white">
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    isOpen
                      ? "border-white/20 bg-white/10"
                      : "border-transparent"
                  }`}
                >
                  {isOpen ? <CloseIcon /> : <PlusIcon />}
                </motion.div>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <AnimatePresence initial={false}>
            {isOpen && (
              <Accordion.Content forceMount asChild>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
    </motion.div>
  );
};

const Sidebar = ({ isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInRight}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="h-auto rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="relative flex items-center justify-center mb-6 shadow-lg h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/20"
      >
        <StarIcon />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-3 text-xl font-bold text-white"
      >
        Still have any Questions?
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mb-8 text-[15px] leading-relaxed text-white/60"
      >
        Let's collaborate to create an exceptional website that sets you apart
        from the competition. Contact me today to discuss your web design needs.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto rounded-xl bg-[#6D28D9] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#5B21B6] hover:shadow-lg hover:shadow-purple-500/25"
      >
        Contact Me
      </motion.button>
    </motion.div>
  );
};

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState("1");

  // Refs for scroll detection
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const faqListRef = useRef(null);
  const sidebarRef = useRef(null);

  // InView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const faqListInView = useInView(faqListRef, { once: true, margin: "-50px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={sectionRef}
      className="container min-h-screen px-4 py-12 overflow-hidden text-white md:py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/50"
          >
            Here are answers to some common questions
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-px max-w-xs mx-auto mt-8 origin-center bg-gradient-to-r from-transparent via-secondColor/50 to-transparent"
          />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Accordion List */}
          <motion.div
            ref={faqListRef}
            initial="hidden"
            animate={faqListInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-8"
          >
            <motion.div
              initial="hidden"
              animate={faqListInView ? "visible" : "hidden"}
              variants={scaleIn}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="rounded-3xl border border-white/[0.05] bg-white/[0.01] p-6 sm:p-8"
            >
              <Accordion.Root
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {faqData.map((item, index) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openItem === item.id}
                    index={index}
                    isInView={faqListInView}
                  />
                ))}
              </Accordion.Root>
            </motion.div>
          </motion.div>

          <div ref={sidebarRef} className="lg:col-span-4">
            <Sidebar isInView={sidebarInView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
