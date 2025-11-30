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
      "It depends on the project. A modern one-page or business website can take 3–7 days. A full e-commerce store usually takes 1–3 weeks. Custom MERN applications vary based on features. I always deliver fast while keeping quality at the highest level.",
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

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const FAQItem = ({ item, isOpen, index, isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Accordion.Item value={item.id} className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <motion.div
            className="absolute inset-0 bg-mainColor"
            animate={{
              opacity: isOpen ? 0.25 : 0,
            }}
            transition={{ duration: 0.4 }}
          />

          <Accordion.Header>
            <Accordion.Trigger className="relative w-full px-6 text-left cursor-pointer py-7 sm:px-8 sm:py-8">
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <motion.span
                      animate={{
                        color: isOpen
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-bold tracking-[0.3em]"
                    >
                      {item.id.padStart(2, "0")}
                    </motion.span>
                    <motion.div
                      className="flex-1 h-px bg-gradient-to-r from-secondColor/50 to-transparent"
                      animate={{
                        scaleX: isOpen ? 1 : 0.6,
                        opacity: isOpen ? 0.6 : 0.3,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                    {item.question}
                  </h3>
                </div>

                <div className="shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-10 h-10 border rounded-full md:h-12 md:w-12 border-white/20 bg-white/5 backdrop-blur-sm"
                    animate={{
                      borderColor: isOpen
                        ? "rgba(248, 123, 27, 0.6)"
                        : "rgba(255,255,255,0.15)",
                      backgroundColor: isOpen
                        ? "rgba(248, 123, 27, 0.2)"
                        : "rgba(255,255,255,0.05)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          {/* Content */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <Accordion.Content forceMount asChild>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-8 sm:px-8">
                    {/* Answer */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="text-sm leading-relaxed md:text-base text-white/80"
                    >
                      {item.answer}
                    </motion.p>
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

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const accordionRef = useRef(null);

  // InView hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const accordionInView = useInView(accordionRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="mb-12 text-center">
          <motion.h1
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={headerVariants}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={headerVariants}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="max-w-4xl mx-auto mt-4 text-base md:text-lg text-white/70"
          >
            Find answers to common questions about our services
          </motion.p>

          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={dividerVariants}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent"
          />
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef}>
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-4"
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openItem === item.id}
                index={index}
                isInView={accordionInView}
              />
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
