import * as Accordion from "@radix-ui/react-accordion";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

const faqData = [
  {
    id: "1",
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to meet your business needs.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months.",
  },
  {
    id: "3",
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Each project is quoted individually based on requirements.",
  },
  {
    id: "4",
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly after launch.",
  },
  {
    id: "5",
    question: "How do we get started?",
    answer:
      "Getting started is easy! Simply reach out through our contact form or schedule a free consultation.",
  },
];

const FAQItem = ({ item, isOpen }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Accordion.Item value={item.id} className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          {/* Background color when open */}
          <motion.div
            className="absolute inset-0 bg-mainColor"
            animate={{
              opacity: isOpen ? 0.25 : 0,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Trigger */}
          <Accordion.Header>
            <Accordion.Trigger className="relative w-full px-6 text-left cursor-pointer py-7 sm:px-8 sm:py-8">
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  {/* Number and gradient line */}
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

                  {/* Question */}
                  <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                    {item.question}
                  </h3>
                </div>

                {/* Plus icon button */}
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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-white/70"
          >
            Find answers to common questions about our services
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isHeaderInView
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent"
          />
        </div>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} isOpen={openItem === item.id} />
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FAQAccordion;
