/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import projectNumOne from "../../../../src/assets/zidaneproject.jpeg";
import projectNumTwo from "../../../../src/assets/migrationproject.jpeg";
import projectNumThree from "../../../../src/assets/toolsproject.jpeg";
import projectNumFour from "../../../../src/assets/hoggarproject.jpeg";

const RecentWork = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardRect, setCardRect] = useState(null);
  const cardRefs = useRef({});

  const projects = [
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
        "React Hook Form",
        "Swiper",
      ],
      features: [
        "Browse Available Apartments",
        "Detailed Property Listings with Photos",
        "Contact Form for Inquiries",
        "Responsive Mobile-Friendly Design",
        "Property Details & Amenities Display",
        "Location Information",
        "Responsive Mobile-Friendly Design",
        "Location Information",
        "Pricing Display",
        "Image Gallery for Each Property",
        "User-Friendly Navigation",
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
        "Migration Academy DZ is an educational platform that helps Algerians learn how to successfully immigrate abroad. The platform offers recorded video courses teaching immigration application processes, professional CV creation, document preparation, and job searching strategies in target countries - all at affordable prices with unlimited access.",
      tech: [
        "WordPress",
        "Elementor Page Builder",
        "PHP",
        "MySQL",
        "HTML5",
        "HTML5/CSS3",
        "JavaScript",
        "Responsive Design",
        "Custom Fonts (Google Fonts)",
      ],
      features: [
        "Professional CV/Resume Creation Training",
        "Recorded Video Courses on Immigration Platforms",
        "Immigration Document Preparation Guides",
        "Job Search Strategies for Target Countries",
        "Affordable Pricing for All Users",
        "Unlimited Access to All Lessons",
        "Technical Support & Customer Service",
        "Interview Preparation Resources",
        "Self-Learning Platform (No Intermediaries Needed)",
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
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
        "Vite",
        "i18next",
        "Framer Motion",
        "React Hook Form",
        "Cloudinary",
        "Cookie Parser",
        "JWT Authentication",
        "CORS",
        "Swiper",
        "Moment.js",
      ],
      features: [
        "User Authentication & Authorization (JWT)",
        "Role-Based Access Control (Admin/User)",
        "Comprehensive Admin Dashboard",
        "Product Management (CRUD Operations)",
        "Category Management System",
        "Shopping Cart with Real-time Updates",
        "Multi-Step Checkout Process",
        "Order Tracking & Management",
        "User Profile & Order History",
        "Favorites/Wishlist System",
        "Multi-language Support (Arabic/French)",
        "Image Gallery & Upload (Cloudinary)",
        "Responsive Mobile-First Design",
        "Advanced Product Search & Filtering",
        "Product Image Carousel (Swiper)",
        "Toast Notifications",
        "Smooth Scroll Navigation",
        "Lazy Loading & Code Splitting",
        "Privacy Policy & Terms",
        "Newest Products Section",
        "Facebook Pixel Integration",
        "Secure Cookie-Based Sessions",
        "RESTful API Architecture",
        "Production-Ready Deployment",
      ],
      github: "#",
      live: "https://toolsmarketdz.com",
    },
    {
      id: 4,
      category: "E-COMMERCE",
      title: "Hoggar Shop - Home Appliances E-Commerce Store",
      image: projectNumFour, // Replace with your project image
      description:
        "A comprehensive e-commerce platform specializing in home appliances and electrical equipment. Features a complete product catalog with small and large appliances, shopping cart, promotional offers, and bilingual support for the Algerian market.",
      tech: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Elementor",
        "Payment Gateway Integration",
        "Responsive Design",
        "Google Fonts",
      ],
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Product Categories (Small & Large Appliances)",
        "Product Variations & Options",
        "Promotional Pricing System",
        "Flash Sales & Limited Offers",
        "Product Rating & Reviews",
        "Product Search & Filtering",
        "Multi-language Support (French/Arabic)",
        "Responsive Mobile Design",
        "Blog Section",
        "Expert Advice & Buying Guides",
        "Latest Products Section",
        "Featured Products Showcase",
        "Product Image Galleries",
        "Delivery Information",
        "Warranty Details",
        "Price Display in Algerian Dinar (DZD)",
        "Customer Support Information",
        "Brand Partnership Display",
        "Newsletter Subscription",
        "Social Media Integration",
        "After-Sales Service Information",
        "Modern Landing Page Design",
        "SEO Optimization",
      ],
      github: "#", // Add your GitHub repo link if applicable
      live: "https://hoggarshop.com/",
    },
  ];

  const handleCardClick = (project) => {
    const cardElement = cardRefs.current[project.id];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setCardRect(rect);
    }
    setIsAnimating(true);
    setSelectedCard(project);
  };

  const useReveal = (threshold = 0.2) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedCard(null);
      setCardRect(null);
    }, 400);
  };

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const { ref, isVisible } = useReveal(0.1);

  return (
    <div className="min-h-screen mt-12">
      <div className="container py-12 max-w-7xl md:py-16">
        <div ref={ref} className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Recent Work{" "}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-white/70"
          >
            I deliver modern, high-quality digital solutions that help
            businesses grow and stand out online.
          </motion.p>

          <div className="h-px max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondColor/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-5 mt-4 md:mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[project.id] = el)}
              onClick={() => handleCardClick(project)}
              className={`relative h-[280px] md:h-[380px] rounded-[24px] overflow-hidden cursor-pointer group transition-all duration-300 ${
                selectedCard?.id === project.id
                  ? "opacity-0"
                  : "hover:scale-[0.98]"
              }`}
              style={{
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-out",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div className="relative -translate-y-1/2 top-1/2">
                  <p className="text-xs font-semibold tracking-[0.1em] opacity-80 mb-3">
                    {project.category}
                  </p>
                  <h2 className="max-w-md text-xl font-bold leading-tight md:text-4xl">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            onClick={handleClose}
          >
            <div
              className="w-full max-w-4xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: isAnimating
                  ? cardRect
                    ? `expandFromCard 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                    : `scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                  : `scaleOut 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                transformOrigin: cardRect
                  ? `${cardRect.left + cardRect.width / 2}px ${
                      cardRect.top + cardRect.height / 2
                    }px`
                  : "center",
              }}
            >
              <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <button
                    onClick={handleClose}
                    className="absolute z-10 flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-secondColor top-6 right-6 hover:bg-white/30"
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
                  </button>

                  <div
                    className="absolute inset-0 flex flex-col justify-end p-8 text-white md:px-12"
                    style={{
                      animation: isAnimating
                        ? "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s backwards"
                        : "none",
                    }}
                  >
                    <p className="text-xs font-semibold tracking-[0.2em] opacity-90 mb-3">
                      {selectedCard.category}
                    </p>
                    <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                      {selectedCard.title}
                    </h2>
                  </div>
                </div>

                <div
                  className="p-8 md:p-12"
                  style={{
                    animation: isAnimating
                      ? "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s backwards"
                      : "none",
                  }}
                >
                  <p className="mb-8 text-lg leading-relaxed text-mainColor">
                    {selectedCard.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCard.tech.map((tech, i) => (
                        <p
                          key={i}
                          className="px-4 py-2 text-sm font-medium rounded-full bg-secondColor"
                          style={{
                            animation: isAnimating
                              ? `fadeInScale 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${
                                  0.4 + i * 0.05
                                }s backwards`
                              : "none",
                          }}
                        >
                          {tech}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {selectedCard.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3"
                          style={{
                            animation: isAnimating
                              ? `fadeInLeft 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${
                                  0.5 + i * 0.05
                                }s backwards`
                              : "none",
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-mainColor" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className="flex gap-4"
                    style={{
                      animation: isAnimating
                        ? "fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s backwards"
                        : "none",
                    }}
                  >
                    <a
                      href={selectedCard.github}
                      className="flex-1 py-4 font-semibold text-center text-white transition-colors bg-gray-900 rounded-2xl hover:bg-gray-800"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedCard.live}
                      className="flex-1 py-4 font-semibold text-center text-white transition-colors bg-mainColor rounded-2xl hover:bg-[#0c2b4eea]"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes expandFromCard {
          from {
            transform: translate(${
              cardRect
                ? cardRect.left - window.innerWidth / 2 + cardRect.width / 2
                : 0
            }px, ${
        cardRect
          ? cardRect.top - window.innerHeight / 2 + cardRect.height / 2
          : 0
      }px) scale(${cardRect ? cardRect.width / 896 : 0.8});
            opacity: 0.8;
            border-radius: 28px;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
            border-radius: 32px;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scaleOut {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(0.9);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RecentWork;
