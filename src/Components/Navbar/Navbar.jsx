import { useState } from "react";
import { Home, Folder, Briefcase, Wrench, Mail } from "lucide-react";
import Logo from "../../assets/kmLogowhite.png";

export default function AnimatedNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Folder, label: "Projects" },
    { icon: Briefcase, label: "Experience" },
    { icon: Wrench, label: "Tools" },
    { icon: Mail, label: "Contact Us" },
  ];

  return (
    <div className="flex items-start justify-center pt-8">
      <nav
        className="px-6 py-3 shadow-lg rounded-2xl"
        style={{ backgroundColor: "#1C1A19" }}
      >
        <div className="flex items-center gap-2 md:gap-6">
          <div className="pr-4 border-r border-gray-700">
            <img src={Logo} alt="Logo" className="w-auto h-8 md:h-10" />
          </div>

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button className="p-2 transition-all duration-300 rounded-lg group">
                  <Icon
                    className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-white"
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
                  <span
                    className="px-2 py-1 text-white rounded-md"
                    style={{ backgroundColor: "#2A2725" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
