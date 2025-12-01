/* eslint-disable no-unused-vars */
import { memo, useMemo } from "react";
import mypic from "../../../assets/mypic.webp";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

// ✅ Move static data outside
const socialLinks = [
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

// ✅ Memoize social icon component
const SocialIcon = memo(({ social, index }) => {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-300 rounded-full shadow-md bg-gradient-to-br from-gray-100 to-gray-200 hover:from-mainColor hover:to-secondColor hover:text-white hover:shadow-xl group/icon"
    >
      <Icon className="w-5 h-5" />

      {/* Simpler tooltip */}
      <span className="absolute px-2 py-1 text-xs font-medium text-white transition-opacity duration-200 bg-gray-800 rounded-md opacity-0 pointer-events-none -top-10 group-hover/icon:opacity-100 whitespace-nowrap">
        {social.label}
      </span>
    </motion.a>
  );
});

SocialIcon.displayName = "SocialIcon";

const Card = () => {
  // ✅ Use CSS animations instead of Framer Motion for simple animations
  return (
    <div className="w-full mb-4 lg:sticky md:mb-0 lg:top-32 h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative p-6 bg-white shadow-2xl rounded-3xl group"
      >
        {/* Simplified gradient border */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-3xl bg-gradient-to-br from-mainColor/20 via-secondColor/10 to-transparent group-hover:opacity-100" />

        {/* Profile Image Section */}
        <div className="relative mb-6">
          <div className="relative overflow-hidden bg-secondColor aspect-square rounded-2xl">
            <img
              src={mypic}
              alt="Mesbahi Kamel Profile"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              width="400"
              height="400"
            />
          </div>

          {/* ✅ Use CSS animation instead of Framer Motion for orbiting dot */}
          <div
            className="absolute w-3 h-3 rounded-full shadow-lg bg-secondColor animate-orbit"
            style={{ left: "-12px", bottom: "-12px" }}
          />
        </div>

        {/* ✅ Use CSS animation for rotating circle */}
        <div
          className="absolute w-16 h-16 border-2 border-dashed rounded-full border-secondColor opacity-60 animate-spin-slow"
          style={{ top: "10px", right: "0px" }}
        />

        {/* Name Section */}
        <div className="relative mb-2">
          <p className="text-2xl font-semibold text-black md:text-4xl">
            Mesbahi Kamel
          </p>

          {/* Simple underline with CSS animation */}
          <div className="h-0.5 bg-gradient-to-r from-mainColor to-secondColor rounded-full mt-1 w-[60px] animate-expand" />
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-black/70 md:text-base">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Divider */}
        <div className="h-px mb-4 bg-gradient-to-r from-transparent via-secondColor to-transparent" />

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social, index) => (
            <SocialIcon key={social.label} social={social} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default memo(Card);
