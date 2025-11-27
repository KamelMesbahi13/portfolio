import * as Accordion from "@radix-ui/react-accordion";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1>Frequently Asked Questions</h1>
          <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-white/70">
            Find answers to common questions about our services
          </p>
          <div className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent"></div>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-3"
        >
          {faqData.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className="rounded-xl overflow-hidden bg-[#0C2B4E]"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer">
                  <span className="pr-4 text-lg font-medium text-white">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F87B1B] flex items-center justify-center"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </Accordion.Trigger>
              </Accordion.Header>
              <AnimatePresence initial={false}>
                {openItem === item.id && (
                  <Accordion.Content forceMount asChild>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 leading-relaxed text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  </Accordion.Content>
                )}
              </AnimatePresence>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FAQAccordion;
