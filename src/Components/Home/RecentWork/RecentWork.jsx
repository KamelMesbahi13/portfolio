import React, { useState, useEffect, useRef } from "react";

const RecentWork = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardRect, setCardRect] = useState(null);
  const cardRefs = useRef({});

  const projects = [
    {
      id: 1,
      category: "E-COMMERCE",
      title: "Full-Stack Online Shopping Platform",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      description:
        "A complete e-commerce solution with product management, shopping cart, secure checkout, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express.js"],
      features: [
        "User Authentication",
        "Product Search & Filters",
        "Shopping Cart",
        "Payment Gateway",
        "Order Tracking",
        "Admin Dashboard",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      category: "SOCIAL MEDIA",
      title: "Real-Time Social Networking App",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      description:
        "A social media platform with real-time messaging, posts, likes, comments, and user profiles.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      features: [
        "Real-time Chat",
        "Post Feed",
        "Like & Comment",
        "User Profiles",
        "Image Upload",
        "Notifications",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      category: "PRODUCTIVITY",
      title: "Task Management & Collaboration Tool",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      description:
        "A project management application with team collaboration, task tracking, and deadline management.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Context API",
        "Tailwind CSS",
      ],
      features: [
        "Task Boards",
        "Team Collaboration",
        "Deadline Tracking",
        "File Attachments",
        "Activity Log",
        "Progress Analytics",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      category: "ENTERTAINMENT",
      title: "Video Streaming Platform",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
      description:
        "A Netflix-style streaming platform with video playback, user subscriptions, and content management.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Video.js", "Stripe"],
      features: [
        "Video Streaming",
        "User Subscriptions",
        "Watch History",
        "Content Categories",
        "Search Functionality",
        "Responsive Player",
      ],
      github: "#",
      live: "#",
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

  return (
    <div className="min-h-screen mt-12">
      <div className="container py-12 max-w-7xl md:py-16">
        <div className="mb-12 text-center text-white">
          <h1 className="mb-3 text-5xl font-bold md:text-6xl">Recent Work</h1>
          <p className="text-lg">MERN Stack Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[project.id] = el)}
              onClick={() => handleCardClick(project)}
              className={`relative h-[500px] rounded-[28px] overflow-hidden cursor-pointer group transition-all duration-300 ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] opacity-80 mb-3">
                    {project.category}
                  </p>
                  <h2 className="max-w-md text-3xl font-bold leading-tight md:text-4xl">
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
                    className="object-cover w-full h-full"
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
                    className="absolute inset-0 flex flex-col justify-end p-8 text-white md:p-12"
                    style={{
                      animation: isAnimating
                        ? "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s backwards"
                        : "none",
                    }}
                  >
                    <p className="text-xs font-semibold tracking-[0.2em] opacity-90 mb-3">
                      {selectedCard.category}
                    </p>
                    <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                      {selectedCard.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
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

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCard.tech.map((tech, i) => (
                        <span
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
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
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
                          <span className="text-mainColor">{feature}</span>
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
