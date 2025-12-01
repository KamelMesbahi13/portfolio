import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Check,
  Quote,
  AlertCircle,
  Loader2,
  CheckCircle,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";

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

const EMAILJS_SERVICE_ID = "service_190m0iw";
const EMAILJS_TEMPLATE_ID = "template_t1n6wro";
const EMAILJS_PUBLIC_KEY = "74oVzfrotF4si_tTf";

const HomeContactUs = () => {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    service: false,
    message: false,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName": {
        const fieldName = name === "firstName" ? "First name" : "Last name";
        if (!value.trim()) {
          return `${fieldName} is required`;
        }
        if (value.trim().length < 3) {
          return `${fieldName} must be at least 3 characters`;
        }
        if (value.trim().length > 50) {
          return `${fieldName} must be less than 50 characters`;
        }
        if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
          return `${fieldName} can only contain letters`;
        }
        return "";
      }

      case "email": {
        if (!value.trim()) {
          return "Email is required";
        }
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address";
        }
        if (value.length > 100) {
          return "Email must be less than 100 characters";
        }
        return "";
      }

      case "phone": {
        if (!value.trim()) {
          return "Phone number is required";
        }
        const digitsOnly = value.replace(/\D/g, "");
        if (digitsOnly.length < 8) {
          return "Phone number must have at least 8 digits";
        }
        if (digitsOnly.length > 15) {
          return "Phone number must have less than 15 digits";
        }
        if (!/^[+]?[\d\s()-]+$/.test(value)) {
          return "Phone can only contain numbers, +, -, (, )";
        }
        return "";
      }

      case "service": {
        if (!value) {
          return "Please select a service";
        }
        return "";
      }

      case "message": {
        if (!value.trim()) {
          return "Message is required";
        }
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters";
        }
        if (value.trim().length > 1000) {
          return "Message must be less than 1000 characters";
        }
        return "";
      }

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const sanitizedValue = value
      .replace(/<[^>]*>/g, "")
      .replace(/javascript:/gi, "");

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service,
    }));
    setTouched((prev) => ({
      ...prev,
      service: true,
    }));
    setErrors((prev) => ({
      ...prev,
      service: "",
    }));
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: "Kamel Mesbahi",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        service: false,
        message: false,
      });
      setErrors({});

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getInputClasses = (fieldName) => {
    const hasError = errors[fieldName] && touched[fieldName];
    return `w-full px-4 py-3 sm:px-4 sm:py-3 md:px-4 md:py-3 text-base sm:text-sm text-gray-900 transition-all border outline-none rounded-xl bg-gray-50/50 hover:bg-gray-50 ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 pr-8"
        : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
    }`;
  };

  return (
    <div className="container flex items-center justify-center w-full py-12 sm:py-20">
      <div className="bg-white p-0 rounded-2xl sm:rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full max-w-[1400px] overflow-hidden">
        <div className="flex flex-col gap-0 lg:flex-row">
          <div
            className="w-full lg:w-[45%] p-6 sm:p-8 md:p-12 relative flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: colors.main }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-white md:mb-10">
                <div className="flex items-center justify-center w-8 h-8 border rounded-full sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border-white/20">
                  <div className="w-4 h-4 bg-white rounded-full sm:w-4 sm:h-4 md:w-5 md:h-5 shadow-glow" />
                </div>
                <span className="text-base font-semibold tracking-wide md:text-lg text-white/90">
                  Kamel Mesbahi
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-2xl font-medium leading-tight text-white sm:mb-6 md:text-4xl lg:text-5xl"
              >
                Turn Ideas Into <br />
                <span style={{ color: colors.second }}>Digital Reality.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-md text-sm leading-relaxed sm:block text-gray-300/90"
              >
                Whether it's a website, web app, or social media campaign, I
                craft modern, high-performing digital experiences that make your
                brand stand out.
              </motion.p>
            </div>

            <div className="relative z-10 flex-col items-center hidden w-full mt-8 sm:flex md:mt-12 lg:mt-20">
              <div className="relative w-full bg-white rounded-xl sm:rounded-2xl md:rounded-[2rem] p-4 md:p-6 shadow-2xl overflow-hidden min-h-[160px] md:min-h-[180px] flex flex-col justify-center group">
                <Quote
                  className="absolute w-16 h-16 text-gray-100 transition-transform duration-700 transform opacity-50 pointer-events-none md:w-20 md:h-20 -top-2 -right-2 rotate-12 group-hover:scale-110"
                  fill="currentColor"
                />

                <div className="absolute top-6 md:top-8 left-0 w-1.5 h-8 md:h-10 rounded-r-full bg-orange-500" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 px-3 md:px-4"
                  >
                    <p className="mb-4 text-sm italic font-medium leading-relaxed text-gray-800 md:text-base line-clamp-3">
                      "{quotes[currentQuote].text}"
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="w-6 md:w-8 h-0.5 bg-orange-500" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-wide text-gray-900 uppercase md:text-sm">
                          {quotes[currentQuote].author}
                        </span>
                        <span className="text-[10px] md:text-xs font-medium text-gray-500">
                          {quotes[currentQuote].role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 md:mt-5">
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

          <div className="w-full lg:w-[55%] bg-white p-6 sm:p-8 md:p-12 lg:p-12 flex flex-col justify-center">
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-4 p-4 rounded-xl flex items-center justify-between ${
                    submitStatus === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus === "success" ? (
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="flex-shrink-0 w-5 h-5 text-red-500" />
                    )}
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          submitStatus === "success"
                            ? "text-green-800"
                            : "text-red-800"
                        }`}
                      >
                        {submitStatus === "success"
                          ? "Message sent successfully!"
                          : "Failed to send message"}
                      </p>
                      <p
                        className={`text-xs ${
                          submitStatus === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {submitStatus === "success"
                          ? "I'll get back to you as soon as possible."
                          : "Please try again later or contact me directly."}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className={`p-1 rounded-full transition-colors flex-shrink-0 ${
                      submitStatus === "success"
                        ? "hover:bg-green-100 text-green-600"
                        : "hover:bg-red-100 text-red-600"
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              ref={formRef}
              className="space-y-4 md:space-y-5"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-gray-900"
                  >
                    First name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John"
                      maxLength={50}
                      autoComplete="given-name"
                      className={getInputClasses("firstName")}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="absolute -translate-y-1/2 right-3 top-1/2">
                        <AlertCircle
                          className="w-4 h-4"
                          style={{ color: "#ef4444" }}
                        />
                      </div>
                    )}
                  </div>
                  {errors.firstName && touched.firstName && (
                    <p
                      style={{ color: "#ef4444" }}
                      className="flex items-center gap-1 mt-1 text-xs"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Last name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Doe"
                      maxLength={50}
                      autoComplete="family-name"
                      className={getInputClasses("lastName")}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="absolute -translate-y-1/2 right-3 top-1/2">
                        <AlertCircle
                          className="w-4 h-4"
                          style={{ color: "#ef4444" }}
                        />
                      </div>
                    )}
                  </div>
                  {errors.lastName && touched.lastName && (
                    <p
                      style={{ color: "#ef4444" }}
                      className="flex items-center gap-1 mt-1 text-xs"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@email.com"
                      maxLength={100}
                      autoComplete="email"
                      className={getInputClasses("email")}
                    />
                    {errors.email && touched.email && (
                      <div className="absolute -translate-y-1/2 right-3 top-1/2">
                        <AlertCircle
                          className="w-4 h-4"
                          style={{ color: "#ef4444" }}
                        />
                      </div>
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <p
                      style={{ color: "#ef4444" }}
                      className="flex items-center gap-1 mt-1 text-xs"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Phone <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 555 000-0000"
                      maxLength={20}
                      autoComplete="tel"
                      className={getInputClasses("phone")}
                    />
                    {errors.phone && touched.phone && (
                      <div className="absolute -translate-y-1/2 right-3 top-1/2">
                        <AlertCircle
                          className="w-4 h-4"
                          style={{ color: "#ef4444" }}
                        />
                      </div>
                    )}
                  </div>
                  {errors.phone && touched.phone && (
                    <p
                      style={{ color: "#ef4444" }}
                      className="flex items-center gap-1 mt-1 text-xs"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative space-y-1.5">
                <label className="text-sm font-semibold text-gray-900">
                  I'm interested in...{" "}
                  <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={() => {
                      setTimeout(() => {
                        setTouched((prev) => ({ ...prev, service: true }));
                        if (!formData.service) {
                          setErrors((prev) => ({
                            ...prev,
                            service: "Please select a service",
                          }));
                        }
                      }, 200);
                    }}
                    className={`w-full px-4 py-3 sm:px-4 sm:py-3 md:px-4 md:py-3 text-left bg-gray-50/50 border rounded-xl flex items-center justify-between transition-all duration-200 outline-none hover:bg-gray-50
                      ${
                        errors.service && touched.service
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : isOpen
                          ? "border-orange-500 ring-2 ring-orange-500/20"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <span
                      className={`text-base sm:text-sm truncate pr-2 ${
                        formData.service ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {formData.service || "— Choose an option —"}
                    </span>
                    <div className="flex items-center gap-1">
                      {errors.service && touched.service && (
                        <AlertCircle
                          className="w-4 h-4"
                          style={{ color: "#ef4444" }}
                        />
                      )}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-1 overflow-hidden overflow-y-auto bg-white border border-gray-100 shadow-xl rounded-xl max-h-48 sm:max-h-60"
                      >
                        {services.map((service) => (
                          <li
                            key={service}
                            onClick={() => handleServiceSelect(service)}
                            className="flex items-center justify-between px-4 py-3 text-base text-gray-700 transition-colors cursor-pointer sm:text-sm hover:bg-gray-50 hover:text-orange-500 group"
                          >
                            <span className="pr-2 line-clamp-1">{service}</span>
                            {formData.service === service && (
                              <Check className="flex-shrink-0 w-3 h-3 text-orange-500 sm:w-4 sm:h-4" />
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                {errors.service && touched.service && (
                  <p
                    style={{ color: "#ef4444" }}
                    className="flex items-center gap-1 mt-1 text-xs"
                  >
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-900"
                >
                  How can we help you?{" "}
                  <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project... (min 10 characters)"
                    maxLength={1000}
                    className={`w-full px-4 py-3 sm:px-4 sm:py-3 md:px-4 md:py-3 text-base sm:text-sm text-gray-900 transition-all border outline-none resize-none rounded-xl bg-gray-50/50 hover:bg-gray-50 ${
                      errors.message && touched.message
                        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <div className="absolute right-3 top-3">
                      <AlertCircle
                        className="w-4 h-4"
                        style={{ color: "#ef4444" }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {errors.message && touched.message ? (
                    <p
                      style={{ color: "#ef4444" }}
                      className="flex items-center gap-1 text-xs"
                    >
                      {errors.message}
                    </p>
                  ) : (
                    <span></span>
                  )}
                  <p className="text-xs text-gray-400">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-3.5 sm:py-3 md:py-4 text-sm md:text-base font-medium text-white transition-all shadow-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: colors.main }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
