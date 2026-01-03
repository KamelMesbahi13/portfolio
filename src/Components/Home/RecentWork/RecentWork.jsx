import { useState, useEffect, useRef, memo, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView } from "framer-motion";
import projectNumOne from "../../../../src/assets/zidaneproject.webp";
import projectNumTwo from "../../../../src/assets/migrationproject.webp";
import projectNumThree from "../../../../src/assets/toolsproject.webp";
import projectNumFour from "../../../../src/assets/hoggarproject.webp";

// ✅ 1. Move Data Outside (Created once)
const PROJECTS = [
  {
    id: 1,
    category: "HOSPITALITY / RENTAL PLATFORM",
    title: "Hotel Apartment Zidane - Apartment Rental Platform",
    image: projectNumOne,
    description:
      "Hotel Apartment Zidane is a modern apartment rental platform, designed to help travelers find and book accommodations easily. The platform allows clients to browse available apartments, view detailed property information with photos, check availability, and contact property managers directly for bookings and inquiries.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "i18next",
      "Framer Motion",
      "Swiper",
    ],
    features: [
      "Browse Available Apartments",
      "Detailed Property Listings",
      "Contact Form for Inquiries",
      "Responsive Design",
      "Pricing Display",
      "Image Gallery",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    category: "EDUCATION / E-LEARNING",
    title: "Migration Academy DZ - Immigration Learning Platform",
    image: projectNumTwo,
    description:
      "Migration Academy DZ is an educational platform that helps Algerians learn how to successfully immigrate abroad. The platform offers recorded video courses teaching immigration application processes, professional CV creation, document preparation, and job searching strategies.",
    tech: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "JavaScript",
      "Responsive Design",
    ],
    features: [
      "Professional CV Creation",
      "Recorded Video Courses",
      "Document Preparation Guides",
      "Job Search Strategies",
      "Technical Support",
    ],
    github: "#",
    live: "https://migrationacademydz.com",
  },
  {
    id: 3,
    category: "E-COMMERCE",
    title: "ToolsMarketDZ - Full-Stack E-Commerce Platform",
    image: projectNumThree,
    description:
      "A comprehensive MERN stack e-commerce platform for tools with advanced admin panel, multi-language support, real-time order management, secure authentication, and seamless user experience.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
      "Cloudinary",
      "JWT",
    ],
    features: [
      "User Authentication (JWT)",
      "Admin Dashboard",
      "Product Management",
      "Shopping Cart",
      "Multi-language Support",
      "Responsive Design",
    ],
    github: "#",
    live: "https://toolsmarketdz.com",
  },
  {
    id: 4,
    category: "E-COMMERCE",
    title: "Hoggar Shop - Home Appliances E-Commerce Store",
    image: projectNumFour,
    description:
      "A comprehensive e-commerce platform specializing in home appliances and electrical equipment. Features a complete product catalog with small and large appliances, shopping cart, promotional offers, and bilingual support.",
    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Elementor",
      "Payment Gateway",
      "CSS3",
    ],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Promotional Pricing",
      "Flash Sales",
      "Product Reviews",
      "Multi-language Support",
    ],
    github: "#",
    live: "https://hoggarshop.com/",
  },
];

// ✅ 2. Memoize the Card Component
const ProjectCard = memo(({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 0.98 }}
      onClick={() => onClick(project)}
      className="relative h-[280px] md:h-[380px] rounded-[24px] overflow-hidden cursor-pointer group"
    >
      <motion.img
        layoutId={`card-image-${project.id}`}
        src={project.image}
        alt={project.title}
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
        <motion.div
          layoutId={`card-content-${project.id}`}
          className="relative -translate-y-1/2 top-1/2"
        >
          <p className="text-xs font-semibold tracking-[0.1em] opacity-80 mb-3">
            {project.category}
          </p>
          <h2 className="max-w-md text-white">{project.title}</h2>
        </motion.div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ✅ 3. Main Component
const RecentWork = () => {
  const [selectedId, setSelectedId] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Memoize the selected project lookup
  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  const handleClose = useCallback(() => setSelectedId(null), []);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <div className="min-h-screen mt-12">
      <div className="container py-12 max-w-7xl md:py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Recent Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-textColorWhite/70 dark:text-textColorDark"
          >
            I deliver modern, high-quality digital solutions that help
            businesses grow and stand out online.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={headerInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 mt-7 md:mt-12 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      {/* ✅ 4. Optimized Modal with AnimatePresence & Layout Animations */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-full bg-white/20 top-6 right-6 hover:bg-white/40 backdrop-blur-md"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </motion.button>

              {/* Hero Image */}
              <div className="relative h-[300px] md:h-[500px]">
                <motion.img
                  layoutId={`card-image-${selectedId}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 text-white md:px-12">
                  <motion.div layoutId={`card-content-${selectedId}`}>
                    <p className="text-xs font-semibold tracking-[0.2em] opacity-90 mb-3 text-secondColor">
                      {selectedProject.category}
                    </p>
                    <h2 className="text-white">{selectedProject.title}</h2>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white md:p-12"
              >
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondColor" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 font-semibold text-center text-white transition-transform bg-gray-900 rounded-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 font-semibold text-center text-white transition-transform bg-secondColor rounded-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(RecentWork);
