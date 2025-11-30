import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Quote } from "lucide-react";

const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    role: "Co-Founder, Apple",
  },
  {
    text: "Content precedes design. Design in the absence of content is not design, it's decoration.",
    author: "Jeffrey Zeldman",
    role: "Web Design Pioneer",
  },
  {
    text: "Simplicity is the ultimate sophistication. It is the soul of efficiency.",
    author: "Leonardo da Vinci",
    role: "Polymath",
  },
  {
    text: "Digital design is like painting, except the paint never dries.",
    author: "Neville Brody",
    role: "Graphic Designer",
  },
];

const HomeContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [currentQuote, setCurrentQuote] = useState(0);

  const colors = {
    main: "#0C2B4E",
    second: "#F87B1B",
  };

  const services = [
    "Custom Web Applications (MERN Stack)",
    "WordPress Websites / Woocommerce Websites (E-commerce",
    "Web Design",
    "UI/UX Design",
    "Social Media Design",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex items-center justify-center w-full min-h-[80vh] py-8 md:py-12 font-sans">
      <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-2xl w-full max-w-[1400px] overflow-hidden border border-gray-100">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div
            className="w-full lg:w-[45%] rounded-[2rem] p-8 md:p-12 relative flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: colors.main }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 text-white">
                <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-white/10 backdrop-blur-md border-white/20">
                  <div className="w-5 h-5 bg-white rounded-full shadow-glow" />
                </div>
                <span className="text-lg font-semibold tracking-wide text-white/90">
                  Kamel Mesbahi
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 text-4xl font-medium leading-tight text-white md:text-5xl"
              >
                Turn Ideas Into <br />
                <span style={{ color: colors.second }}>Digital Reality.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-md text-sm leading-relaxed text-gray-300/90"
              >
                Whether it’s a website, web app, or social media campaign, I
                craft modern, high-performing digital experiences that make your
                brand stand out.
              </motion.p>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full mt-20 lg:mt-24">
              <div className="relative w-full bg-white rounded-[2rem] p-8 shadow-2xl overflow-hidden min-h-[200px] flex flex-col justify-center group">
                <Quote
                  className="absolute w-24 h-24 text-gray-100 transition-transform duration-700 transform opacity-50 pointer-events-none -top-2 -right-2 rotate-12 group-hover:scale-110"
                  fill="currentColor"
                />

                <div className="absolute top-8 left-0 w-1.5 h-12 rounded-r-full bg-[#F87B1B]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 px-4"
                  >
                    <p className="mb-6 text-base italic font-medium leading-relaxed text-gray-800">
                      "{quotes[currentQuote].text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#F87B1B]" />{" "}
                      <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-wide text-gray-900 uppercase">
                          {quotes[currentQuote].author}
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                          {quotes[currentQuote].role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6">
                {quotes.map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-1 rounded-full cursor-pointer bg-white/30"
                    animate={{
                      width: currentQuote === index ? 24 : 6,
                      backgroundColor:
                        currentQuote === index
                          ? "#F87B1B"
                          : "rgba(255,255,255,0.3)",
                    }}
                    onClick={() => setCurrentQuote(index)}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] bg-white p-6 md:p-12 flex flex-col justify-center">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Your first name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Your last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
              </div>

              <div className="relative space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  I'm interested in...
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-4 py-3 text-left bg-gray-50/50 border rounded-xl flex items-center justify-between transition-all duration-200 outline-none hover:bg-gray-50
                      ${
                        isOpen
                          ? "border-[#F87B1B] ring-2 ring-[#F87B1B]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <span
                      className={`text-sm ${
                        selectedService ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {selectedService || "— Please choose an option —"}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 overflow-hidden bg-white border border-gray-100 shadow-xl rounded-xl"
                      >
                        {services.map((service) => (
                          <li
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setIsOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 hover:text-[#F87B1B] transition-colors flex items-center justify-between group"
                          >
                            {service}
                            {selectedService === service && (
                              <Check className="w-4 h-4 text-[#F87B1B]" />
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  How can we help you?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about your project"
                  className="w-full px-4 py-3 text-sm text-gray-900 transition-all border border-gray-200 outline-none resize-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50 hover:bg-gray-50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-4 mt-4 text-base font-medium text-white transition-all shadow-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/20"
                style={{ backgroundColor: colors.main }}
              >
                Send message
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="mt-4 text-xs text-center text-gray-400">
                By clicking on "Send message" button, you agree to our{" "}
                <a
                  href="#"
                  className="underline transition-colors hover:text-gray-600"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
