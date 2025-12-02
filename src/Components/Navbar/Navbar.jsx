import { useState, memo } from "react";
import { Home, Folder, Briefcase, Wrench, Mail, Sun, Moon } from "lucide-react";
import Logo from "../../assets/kmLogowhite.webp";
import { useTheme } from "../Functions/ThemeContext";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Folder, label: "Projects", id: "projects" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Wrench, label: "Tools", id: "tools" },
  { icon: Mail, label: "Contact Us", id: "contact" },
];

const NavItem = memo(({ item, isHovered, onMouseEnter, onMouseLeave }) => {
  const Icon = item.icon;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="p-2 transition-all duration-300 rounded-lg group">
        <Icon
          className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-white dark:group-hover:text-white group-hover:dark:text-white"
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
});

NavItem.displayName = "NavItem";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
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

  return (
    <div className="flex items-start justify-center pt-8">
      <nav className="px-6 py-3 bg-white dark:bg-[#1C1A19] shadow-lg rounded-2xl transition-colors duration-300">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logo */}
          <div className="pr-4 border-r border-gray-300 dark:border-gray-700">
            <img
              src={Logo}
              alt="KM Logo"
              className="w-auto h-8 md:h-10"
              width="40"
              height="40"
              loading="eager"
            />
          </div>

          {/* Nav Items */}
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
