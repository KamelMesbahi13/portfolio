import { memo } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import LogoWhite from "../../assets/kmLogowhite.webp";
import Logo from "../../assets/kmLogo.webp";

// ✅ Static data outside
const FOOTER_LINKS = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "FAQ", href: "#faq" },
  ],
  services: [
    { name: "MERN Development", href: "#services" },
    { name: "WordPress Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "E-Commerce Solutions", href: "#services" },
    { name: "Branding & Design", href: "#services" },
  ],
  social: [
    { icon: Github, href: "https://github.com/KamelMesbahi13", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/el-kamel-mesbahi-747965211",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/kml_mesbahi/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://web.facebook.com/kamel.136.km",
      label: "Facebook",
    },
  ],
  contact: [
    {
      icon: Mail,
      text: "elkamel.mesbahi@gmail.com",
      href: "mailto:elkamel.mesbahi@gmail.com",
    },
    { icon: Phone, text: "+213 540 425 969", href: "tel:+213 540 425 969" },
    { icon: MapPin, text: "Algeria", href: "#" },
  ],
};

// ✅ Lightweight Social Icon
const SocialIcon = memo(({ social }) => {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="
        flex items-center justify-center w-10 h-10 
        border rounded-full transition-all duration-300
        hover:scale-110 active:scale-95
        border-mainColor/30 bg-mainColor/10 text-mainColor
        hover:bg-[#F87B1B] hover:border-[#F87B1B] hover:text-white
        dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white
      "
    >
      <Icon size={18} />
    </a>
  );
});

SocialIcon.displayName = "SocialIcon";

// ✅ Footer Link Component
const FooterLink = memo(({ href, children, external = false }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group flex items-center gap-1 text-sm transition-colors duration-300
        text-textColorWhite/70 hover:text-[#F87B1B]
        dark:text-white/70 dark:hover:text-[#F87B1B]
      "
    >
      <span>{children}</span>
      {external && (
        <ArrowUpRight
          size={14}
          className="transition-all duration-300 -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
        />
      )}
    </a>
  );
});

FooterLink.displayName = "FooterLink";

// ✅ Contact Item Component
// eslint-disable-next-line no-unused-vars
const ContactItem = memo(({ icon: Icon, text, href }) => {
  return (
    <a
      href={href}
      className="
        flex items-center gap-3 text-sm transition-colors duration-300
        text-textColorWhite/70 hover:text-[#F87B1B]
        dark:text-white/70 dark:hover:text-[#F87B1B]
        group
      "
    >
      <div
        className="
        flex items-center justify-center w-8 h-8 
        rounded-lg border transition-all duration-300
        bg-mainColor/5 border-mainColor/20 group-hover:bg-[#F87B1B]/10 group-hover:border-[#F87B1B]/30
        dark:bg-white/5 dark:border-white/10
      "
      >
        <Icon size={16} className="text-[#F87B1B]" />
      </div>
      <span>{text}</span>
    </a>
  );
});

ContactItem.displayName = "ContactItem";

// ✅ Main Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden text-textColorWhite dark:text-white">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F87B1B]/5 to-transparent pointer-events-none" />

      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F87B1B]/50 to-transparent" />

      <div className="container relative px-6 py-12 mx-auto md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 pb-10 border-b md:grid-cols-2 lg:grid-cols-4 border-mainColor/20 dark:border-white/10">
          {/* Column 1: Branding & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Kamel Mesbahi Logo"
                className="w-auto h-10 dark:hidden"
                width="40"
                height="40"
              />
              <img
                src={LogoWhite}
                alt="Kamel Mesbahi Logo"
                className="hidden w-auto h-10 dark:block"
                width="40"
                height="40"
              />
              <div>
                <h3 className="text-xl font-bold text-textColorWhite dark:text-white">
                  Kamel Mesbahi
                </h3>
                <p className="text-xs text-textColorWhite/70 dark:text-white/50">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-textColorWhite/70 dark:text-white/70">
              Crafting modern web experiences with the MERN stack. Turning ideas
              into scalable digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {FOOTER_LINKS.social.map((social) => (
                <SocialIcon key={social.label} social={social} />
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-textColorWhite dark:text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-textColorWhite dark:text-white/90">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.name}>
                  <FooterLink href={service.href}>{service.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-textColorWhite dark:text-white/90">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.contact.map((contact, index) => (
                <li key={index}>
                  <ContactItem
                    icon={contact.icon}
                    text={contact.text}
                    href={contact.href}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-sm text-textColorWhite/70 dark:text-white/50">
            © {currentYear} Kamel Mesbahi. All rights reserved.
          </p>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#F87B1B] to-transparent" />
    </footer>
  );
};

export default memo(Footer);
