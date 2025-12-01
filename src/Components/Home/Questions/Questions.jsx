import * as Accordion from "@radix-ui/react-accordion";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

// --- Icons (Styled for Dark Mode) ---

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

// --- Components ---

const FAQItem = ({ item, isOpen }) => {
  return (
    <Accordion.Item value={item.id} className="mb-4">
      <div
        className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
          isOpen
            ? "border-white/10 bg-white/[0.08]" // Slightly lighter when open
            : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]" // Dark glass when closed
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
                  isOpen ? "border-white/20 bg-white/10" : "border-transparent"
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
  );
};

const Sidebar = () => {
  return (
    <div className="h-auto rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
      {/* The Purple/Pink Glow Box */}
      <div className="relative flex items-center justify-center mb-6 shadow-lg h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-purple-500/20">
        <StarIcon />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">
        Still have any Questions?
      </h3>

      <p className="mb-8 text-[15px] leading-relaxed text-white/60">
        Let's collaborate to create an exceptional website that sets you apart
        from the competition. Contact me today to discuss your web design needs.
      </p>

      <button className="w-full sm:w-auto rounded-xl bg-[#6D28D9] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#5B21B6] hover:shadow-lg hover:shadow-purple-500/25 active:scale-95">
        Contact Me
      </button>
    </div>
  );
};

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState("1");

  return (
    // Main Dark Background
    <section className="min-h-screen px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50"
          >
            Here are answers to some common questions
          </motion.p>
        </div>

        {/* Grid Layout: 8 Columns FAQ | 4 Columns Sidebar */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            {/* We remove the white background container from the light mode version 
                and just let the glass cards sit on the dark background directly, 
                or we can wrap them in a large faint glass container. 
                I'll wrap them in a large faint glass container to match the image layout exactly. */}
            <div className="rounded-3xl border border-white/[0.05] bg-white/[0.01] p-6 sm:p-8">
              <Accordion.Root
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {faqData.map((item) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openItem === item.id}
                  />
                ))}
              </Accordion.Root>
            </div>
          </motion.div>

          {/* Right Column: CTA Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <Sidebar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
