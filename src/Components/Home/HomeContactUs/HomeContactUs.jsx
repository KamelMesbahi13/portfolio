import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

const HomeContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const colors = {
    main: "#0C2B4E",
    second: "#F87B1B",
  };

  const services = [
    "Branding Design",
    "Web Design",
    "UI/UX Design",
    "App Design",
  ];

  return (
    <div className="container flex items-center justify-center w-full min-h-[80vh] py-4 md:py-8">
      <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-xl w-full max-w-[1400px] overflow-hidden">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div
            className="w-full lg:w-[45%] rounded-[2rem] p-8 md:p-12 relative flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: colors.main }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12 text-white">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <span className="text-lg font-semibold tracking-wide">
                  Kamel Mesbahi
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 text-4xl font-medium leading-tight text-white md:text-5xl"
              >
                Request a call with <br />
                <span style={{ color: colors.second }}>our experts.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base"
              >
                Ready to bring your vision to life? Our team is ready to assist
                you in creating an unforgettable experience tailored
                specifically to your needs.
              </motion.p>
            </div>

            <div className="relative z-10 mt-16 lg:mt-24">
              <div className="absolute w-12 h-12 transform -translate-y-1/2 bg-white rounded-full top-1/2 -left-6" />
              <div className="absolute w-12 h-12 transform -translate-y-1/2 bg-white rounded-full top-1/2 -right-6" />
              <div className="absolute w-8 h-8 bg-white rounded-full opacity-50 -bottom-8 left-10" />
              <div className="absolute w-8 h-8 bg-white rounded-full opacity-50 -top-8 right-10" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[2rem] p-6 text-center relative mx-2 md:mx-4"
              >
                <div className="flex justify-center mb-3 text-gray-400">
                  <div className="flex gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-gray-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-sm font-medium text-gray-800 md:text-base">
                  "The attention to detail was beyond impressive. They made our
                  project unforgettable!"
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-gray-900">
                    Fiona Jonna
                  </span>
                  <span className="text-xs text-gray-500">
                    Global Partner Services
                  </span>
                </div>
              </motion.div>
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
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Your last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50"
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
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50"
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
                    className={`w-full px-4 py-3 text-left bg-gray-50/50 border rounded-xl flex items-center justify-between transition-all duration-200 outline-none
                      ${
                        isOpen
                          ? "border-[#F87B1B] ring-2 ring-[#F87B1B]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <span
                      className={
                        selectedService ? "text-gray-900" : "text-gray-400"
                      }
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
                  className="w-full px-4 py-3 transition-all border border-gray-200 outline-none resize-none rounded-xl focus:border-[#F87B1B] focus:ring-2 focus:ring-[#F87B1B]/20 bg-gray-50/50"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-4 mt-4 text-base font-medium text-white transition-shadow shadow-lg rounded-xl hover:shadow-xl"
                style={{ backgroundColor: colors.main }}
              >
                Send message
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="mt-4 text-xs text-center text-gray-400">
                By clicking on "Send message" button, you agree to our{" "}
                <a href="#" className="underline hover:text-gray-600">
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
