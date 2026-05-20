/* eslint-disable no-unused-vars */
import { memo } from "react";
import mypic from "../../../assets/mypic.webp";
import cvFile from "../../../assets/CV_.pdf";
import { Github, Linkedin, Instagram, Facebook, Download } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/yourusername",
    label: "Facebook",
  },
];

// ✅ Premium "Tech Glow" Social Icon
const SocialIcon = memo(({ social }) => {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="relative outline-none group"
    >
      <div
        className="
        flex items-center justify-center w-12 h-12 
        rounded-full bg-gray-50 text-gray-500 border border-gray-200
        transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        
        /* Hover Effects: confined strictly to this element */
        hover:bg-white
        hover:border-mainColor/50
        hover:text-mainColor 
        hover:-translate-y-1.5 
        hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.2)]
        hover:shadow-mainColor/20
      "
      >
        <Icon
          size={20}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </a>
  );
});

SocialIcon.displayName = "SocialIcon";

const Card = () => {
  return (
    <div className="w-full lg:sticky lg:top-32 h-fit">
      <div className="relative p-6 bg-white shadow-2xl rounded-3xl ring-1 ring-gray-100/50">
        <div className="relative mx-auto mb-6 w-full max-w-[300px] group">
          <div className="relative aspect-square rounded-2xl overflow-hidden border-[3px] border-white shadow-lg">
            <img
              src={mypic}
              alt="Mesbahi Kamel"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-white/20 rounded-full shadow-sm flex items-center gap-2">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
              Open to Work
            </span>
          </div>
        </div>

        <div className="text-left">
          <div className="mb-2">
            <h2 className="text-3xl font-bold leading-none text-textColorWhite dark:text-textColorWhite">
              Mesbahi
            </h2>
            <h2 className="text-3xl font-bold leading-tight text-textColorWhite dark:text-textColorWhite">
              Kamel
            </h2>
          </div>

          <p className="mb-4 text-sm font-medium text-mainColor">
            Software Engineer
          </p>

          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            Turning complex ideas into clean, pixel-perfect builds.
          </p>

          {/* Contact Button: Clean Black */}
          <a
            href={cvFile}
            download="CV_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 bg-black shadow-lg rounded-xl hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            <Download size={18} />
            Download my CV
          </a>

          {/* Divider */}
          <div className="w-full h-px mb-8 bg-gray-100" />

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
