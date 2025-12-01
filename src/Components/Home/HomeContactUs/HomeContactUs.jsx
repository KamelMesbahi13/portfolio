import { useState, useEffect, useRef, memo, useCallback } from "react";
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

// ✅ 1. Move Static Data Outside
const EMAIL_CONFIG = {
  SERVICE_ID: "service_190m0iw",
  TEMPLATE_ID: "template_t1n6wro",
  PUBLIC_KEY: "74oVzfrotF4si_tTf",
};

const COLORS = {
  main: "#0C2B4E",
  second: "#F87B1B",
};

const QUOTES = [
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

const SERVICES = [
  "Custom Web Applications (MERN Stack)",
  "WordPress / Woocommerce (E-commerce)",
  "Web Design",
  "UI/UX Design",
  "Social Media Design",
];

// ✅ 2. Move Validation Logic Outside (Pure Function)
const REGEX = {
  letters: /^[a-zA-ZÀ-ÿ\s'-]+$/,
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  phone: /^[+]?[\d\s()-]+$/,
  digits: /\D/g,
};

const validateField = (name, value) => {
  switch (name) {
    case "firstName":
    case "lastName": {
      const fieldName = name === "firstName" ? "First name" : "Last name";
      if (!value.trim()) return `${fieldName} is required`;
      if (value.trim().length < 3)
        return `${fieldName} must be at least 3 characters`;
      if (value.trim().length > 50)
        return `${fieldName} must be less than 50 characters`;
      if (!REGEX.letters.test(value))
        return `${fieldName} can only contain letters`;
      return "";
    }
    case "email": {
      if (!value.trim()) return "Email is required";
      if (!REGEX.email.test(value)) return "Please enter a valid email address";
      if (value.length > 100) return "Email must be less than 100 characters";
      return "";
    }
    case "phone": {
      if (!value.trim()) return "Phone number is required";
      const digitsOnly = value.replace(REGEX.digits, "");
      if (digitsOnly.length < 8)
        return "Phone number must have at least 8 digits";
      if (digitsOnly.length > 15)
        return "Phone number must have less than 15 digits";
      if (!REGEX.phone.test(value))
        return "Phone can only contain numbers, +, -, (, )";
      return "";
    }
    case "service":
      return !value ? "Please select a service" : "";
    case "message": {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      if (value.trim().length > 1000)
        return "Message must be less than 1000 characters";
      return "";
    }
    default:
      return "";
  }
};

// ✅ 3. Extract Quote Sidebar (Prevents Form Re-renders)
const QuoteSidebar = memo(() => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full lg:w-[45%] p-6 sm:p-8 md:p-12 relative flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: COLORS.main }}
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
          <span style={{ color: COLORS.second }}>Digital Reality.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md text-sm leading-relaxed sm:block text-gray-300/90"
        >
          Whether it's a website, web app, or social media campaign, I craft
          modern, high-performing digital experiences that make your brand stand
          out.
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
                "{QUOTES[currentQuote].text}"
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 md:w-8 h-0.5 bg-orange-500" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wide text-gray-900 uppercase md:text-sm">
                    {QUOTES[currentQuote].author}
                  </span>
                  <span className="text-[10px] md:text-xs font-medium text-gray-500">
                    {QUOTES[currentQuote].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 md:mt-5">
          {QUOTES.map((_, index) => (
            <motion.div
              key={index}
              className="h-1 rounded-full cursor-pointer bg-white/30"
              animate={{
                width: currentQuote === index ? 16 : 6,
                backgroundColor:
                  currentQuote === index ? "#F87B1B" : "rgba(255,255,255,0.3)",
              }}
              onClick={() => setCurrentQuote(index)}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

QuoteSidebar.displayName = "QuoteSidebar";

// ✅ 4. Main Component
const HomeContactUs = () => {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Memoize helper
  const getInputClasses = useCallback(
    (fieldName) => {
      const hasError = errors[fieldName] && touched[fieldName];
      return `w-full px-4 py-3 sm:px-4 sm:py-3 md:px-4 md:py-3 text-base sm:text-sm text-gray-900 transition-all border outline-none rounded-xl bg-gray-50/50 hover:bg-gray-50 ${
        hasError
          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 pr-8"
          : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
      }`;
    },
    [errors, touched]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const sanitizedValue = value
        .replace(/<[^>]*>/g, "")
        .replace(/javascript:/gi, "");

      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

      if (touched[name]) {
        const error = validateField(name, sanitizedValue);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const handleServiceSelect = useCallback((service) => {
    setFormData((prev) => ({ ...prev, service }));
    setTouched((prev) => ({ ...prev, service: true }));
    setErrors((prev) => ({ ...prev, service: "" }));
    setIsOpen(false);
  }, []);

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

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: "Kamel Mesbahi",
        },
        EMAIL_CONFIG.PUBLIC_KEY
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
    } catch (error) {
      console.error("Email failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="container flex items-center justify-center w-full py-12 sm:py-20">
      <div className="bg-white p-0 rounded-2xl sm:rounded-2xl md:rounded-[2.5rem] shadow-2xl w-full max-w-[1400px] overflow-hidden">
        <div className="flex flex-col gap-0 lg:flex-row">
          {/* Left Side - Memoized to prevent re-renders on form type */}
          <QuoteSidebar />

          {/* Right Side - Form */}
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
                    </div>
                  </div>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="p-1 rounded-full hover:bg-gray-100"
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
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="space-y-1.5">
                    <label
                      htmlFor={field}
                      className="text-sm font-semibold text-gray-900"
                    >
                      {field === "firstName" ? "First name" : "Last name"}{" "}
                      <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses(field)}
                      />
                      {errors[field] && touched[field] && (
                        <div className="absolute -translate-y-1/2 right-3 top-1/2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors[field] && touched[field] && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-5">
                {["email", "phone"].map((field) => (
                  <div key={field} className="space-y-1.5">
                    <label
                      htmlFor={field}
                      className="text-sm font-semibold text-gray-900 capitalize"
                    >
                      {field} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={field === "email" ? "email" : "tel"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses(field)}
                      />
                      {errors[field] && touched[field] && (
                        <div className="absolute -translate-y-1/2 right-3 top-1/2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors[field] && touched[field] && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Service Dropdown */}
              <div className="relative space-y-1.5">
                <label className="text-sm font-semibold text-gray-900">
                  I'm interested in...{" "}
                  <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-4 py-3 text-left bg-gray-50/50 border rounded-xl flex items-center justify-between outline-none ${
                      errors.service && touched.service
                        ? "border-red-500"
                        : isOpen
                        ? "border-orange-500 ring-2 ring-orange-500/20"
                        : "border-gray-200"
                    }`}
                  >
                    <span
                      className={`truncate ${
                        formData.service ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {formData.service || "— Choose an option —"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border border-gray-100 shadow-xl rounded-xl max-h-60"
                      >
                        {SERVICES.map((service) => (
                          <li
                            key={service}
                            onClick={() => handleServiceSelect(service)}
                            className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 hover:text-orange-500"
                          >
                            <span className="truncate">{service}</span>
                            {formData.service === service && (
                              <Check className="w-4 h-4 text-orange-500" />
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                {errors.service && touched.service && (
                  <p className="mt-1 text-xs text-red-500">{errors.service}</p>
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
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("message")}
                />
                <div className="flex justify-between">
                  {errors.message && touched.message && (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  )}
                  <p className="ml-auto text-xs text-gray-400">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-3.5 font-medium text-white transition-all shadow-lg rounded-xl hover:shadow-xl hover:shadow-orange-500/20 disabled:opacity-70"
                style={{ backgroundColor: COLORS.main }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <ArrowRight className="w-4 h-4" />
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

export default memo(HomeContactUs);
