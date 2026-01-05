import { useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Folder, User, Wrench, Mail, Sun, Moon } from "lucide-react";
import LogoWhite from "../../assets/kmLogowhite.webp";
import Logo from "../../assets/kmLogo.webp";
import { useTheme } from "../Functions/ThemeContext";

const navItems = [
  { icon: Home, label: "Home", id: "home", path: "/" },
  { icon: Folder, label: "Projects", id: "projects", path: null },
  { icon: User, label: "About Me", id: "aboutme", path: "/aboutme" },
  { icon: Wrench, label: "Tools", id: "tools", path: null },
  { icon: Mail, label: "Contact Us", id: "contact", path: null },
];

const NavItem = memo(
  ({ item, isHovered, onMouseEnter, onMouseLeave, onClick, isActive }) => {
    const Icon = item.icon;
    return (
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          onClick={onClick}
          className={`p-2 transition-all duration-300 rounded-lg group ${
            isActive ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
        >
          <Icon
            className={`w-5 h-5 transition-colors duration-300 ${
              isActive
                ? "text-gray-900 dark:text-white"
                : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            }`}
            strokeWidth={1.5}
          />
        </button>
        <div
          className={`absolute top-full mt-2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <span className="px-2 py-1 text-white rounded-md bg-[#2A2725] dark:bg-[#2A2725] dark:text-white">
            {item.label}
          </span>
        </div>
      </div>
    );
  }
);

NavItem.displayName = "NavItem";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="pl-3 border-l border-gray-300 md:pl-4 dark:border-gray-700">
      <button
        onClick={toggleTheme}
        className="p-2 transition-all duration-300 rounded-lg group hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun
            className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-yellow-500"
            strokeWidth={1.5}
          />
        ) : (
          <Moon
            className="w-5 h-5 text-gray-600 transition-colors duration-300 group-hover:text-blue-600"
            strokeWidth={1.5}
          />
        )}
      </button>
    </div>
  );
};

export default function AnimatedNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.path) {
      // Navigate to a different route
      navigate(item.path);
    } else {
      // If not on homepage, navigate to homepage first with scroll target
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.id } });
      } else {
        // Already on homepage, just scroll
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="fixed z-50 flex items-start justify-center w-full px-3 pt-4 md:pt-8 md:px-0">
      <nav className="px-4 md:px-6 py-3 bg-white dark:bg-[#1C1A19] shadow-lg rounded-2xl transition-colors duration-300">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo */}
          <div className="pr-3 border-r border-gray-300 md:pr-4 dark:border-gray-700">
            <img
              src={isDarkMode ? LogoWhite : Logo}
              alt="KM Logo"
              className="w-auto h-8 transition-opacity duration-300 cursor-pointer md:h-10"
              width="40"
              height="40"
              loading="eager"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Nav Items */}
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              isHovered={hoveredIndex === index}
              isActive={item.path && location.pathname === item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavClick(item)}
            />
          ))}

          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
