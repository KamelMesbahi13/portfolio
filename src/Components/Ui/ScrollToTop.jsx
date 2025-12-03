import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-1/4 right-0 z-50
        group
        flex items-center
        pl-3 pr-2 py-3
        bg-mainColor
        rounded-l-xl
        cursor-pointer
        transition-all duration-300 ease-out
        hover:pr-4
        hover:bg-secondColor
        ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-white" strokeWidth={2} />
    </button>
  );
};

export default ScrollToTopButton;
