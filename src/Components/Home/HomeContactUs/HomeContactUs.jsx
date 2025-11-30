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
    "WordPress / Woocommerce (E-commerce)",
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
    <div className="container flex items-center justify-center w-full px-3 py-4 font-sans sm:py-6 md:py-12 sm:px-4">
      <div className="bg-white p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full max-w-[1400px] overflow-hidden border border-gray-100">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:flex-row">
          {/* Left Panel */}
          <div
            className="w-full lg:w-[45%] rounded-lg sm:rounded-xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-12 relative flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: colors.main }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10">
              {/* Logo Section */}
              <div className="flex items-center gap-2 mb-4 text-white sm:gap-3 sm:mb-6 md:mb-10">
                <div className="flex items-center justify-center border rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border-white/20">
                  <div className="w-3 h-3 bg-white rounded-full sm:w-4 sm:h-4 md:w-5 md:h-5 shadow-glow" />
                </div>
                <span className="text-sm font-semibold tracking-wide sm:text-base md:text-lg text-white/90">
                  Kamel Mesbahi
                </span>
              </div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3 text-xl font-medium leading-tight text-white sm:mb-4 md:mb-6 sm:text-2xl md:text-4xl lg:text-5xl"
              >
                Turn Ideas Into <br />
                <span style={{ color: colors.second }}>Digital Reality.</span>
              </motion.h2>

              {/* Description - Hidden on very small screens */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden max-w-md text-xs leading-relaxed sm:block sm:text-sm text-gray-300/90"
              >
                Whether it's a website, web app, or social media campaign, I
                craft modern, high-performing digital experiences that make your
                brand stand out.
              </motion.p>
            </div>

            {/* Quote Section - Hidden on mobile, shown on sm+ */}
            <div className="relative z-10 flex-col items-center hidden w-full mt-6 sm:flex sm:mt-8 md:mt-12 lg:mt-20">
              <div className="relative w-full bg-white rounded-xl sm:rounded-2xl md:rounded-[2rem] p-3 sm:p-4 md:p-6 shadow-2xl overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center group">
                <Quote
                  className="absolute text-gray-100 transition-transform duration-700 transform opacity-50 pointer-events-none w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 -top-1 -right-1 rotate-12 group-hover:scale-110"
                  fill="currentColor"
                />

                <div className="absolute top-5 sm:top-6 md:top-8 left-0 w-1 sm:w-1.5 h-6 sm:h-8 md:h-10 rounded-r-full bg-secondColor" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 px-2 sm:px-3 md:px-4"
                  >
                    <p className="mb-3 text-xs italic font-medium leading-relaxed text-gray-800 sm:mb-4 md:mb-5 sm:text-sm md:text-base line-clamp-3">
                      "{quotes[currentQuote].text}"
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-secondColor" />
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide text-gray-900 uppercase">
                          {quotes[currentQuote].author}
                        </span>
                        <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-500">
                          {quotes[currentQuote].role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quote Indicators */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mt-3 sm:mt-4 md:mt-5">
                {quotes.map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-1 rounded-full cursor-pointer bg-white/30"
                    animate={{
                      width: currentQuote === index ? 16 : 6,
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

          {/* Right Panel - Form */}
          <div className="w-full lg:w-[55%] bg-white p-3 sm:p-5 md:p-8 lg:p-12 flex flex-col justify-center">
            <form
              className="space-y-3 sm:space-y-4 md:space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name Fields - Always 2 columns */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5">
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-lg sm:rounded-xl focus:border-secondColor focus:ring-2 focus:ring-secondColor/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-lg sm:rounded-xl focus:border-secondColor focus:ring-2 focus:ring-secondColor/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
              </div>

              {/* Email & Phone Fields - Always 2 columns */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5">
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-lg sm:rounded-xl focus:border-secondColor focus:ring-2 focus:ring-secondColor/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 000-0000"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 transition-all border border-gray-200 outline-none rounded-lg sm:rounded-xl focus:border-secondColor focus:ring-2 focus:ring-secondColor/20 bg-gray-50/50 hover:bg-gray-50"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                  I'm interested in...
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left bg-gray-50/50 border rounded-lg sm:rounded-xl flex items-center justify-between transition-all duration-200 outline-none hover:bg-gray-50
                      ${
                        isOpen
                          ? "border-secondColor ring-2 ring-secondColor/20"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <span
                      className={`text-xs sm:text-sm truncate pr-2 ${
                        selectedService ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {selectedService || "— Choose an option —"}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-1 overflow-hidden overflow-y-auto bg-white border border-gray-100 rounded-lg shadow-xl sm:mt-2 sm:rounded-xl max-h-48 sm:max-h-60"
                      >
                        {services.map((service) => (
                          <li
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setIsOpen(false);
                            }}
                            className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-700 transition-colors cursor-pointer hover:bg-gray-50 hover:text-secondColor group"
                          >
                            <span className="pr-2 line-clamp-1">{service}</span>
                            {selectedService === service && (
                              <Check className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-secondColor" />
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
                  How can we help you?
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your project..."
                  className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 transition-all border border-gray-200 outline-none resize-none rounded-lg sm:rounded-xl focus:border-secondColor focus:ring-2 focus:ring-secondColor/20 bg-gray-50/50 hover:bg-gray-50 sm:rows-3 md:rows-4"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-1.5 sm:gap-2 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium text-white transition-all shadow-lg rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-orange-500/20"
                style={{ backgroundColor: colors.main }}
              >
                Send message
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </motion.button>

              {/* Privacy Policy */}
              <p className="text-[9px] sm:text-[10px] md:text-xs text-center text-gray-400">
                By clicking "Send message", you agree to our{" "}
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
