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
import Logo from "../../assets/kmLogowhite.webp";

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
  ],
  contact: [
    {
      icon: Mail,
      text: "contact@kamelmesbahi.com",
      href: "mailto:contact@kamelmesbahi.com",
    },
    { icon: Phone, text: "+213 XXX XXX XXX", href: "tel:+213XXXXXXXXX" },
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
        border border-white/10 rounded-full bg-white/5
        text-white/60 hover:text-white
        hover:bg-[#F87B1B] hover:border-[#F87B1B]
        transition-all duration-300
        hover:scale-110 active:scale-95
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
        group flex items-center gap-1 text-sm text-white/60 
        hover:text-[#F87B1B] transition-colors duration-300
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
        flex items-center gap-3 text-sm text-white/60 
        hover:text-[#F87B1B] transition-colors duration-300
        group
      "
    >
      <div
        className="
        flex items-center justify-center w-8 h-8 
        rounded-lg bg-white/5 border border-white/10
        group-hover:bg-[#F87B1B]/10 group-hover:border-[#F87B1B]/30
        transition-all duration-300
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
    <footer className="relative mt-20 overflow-hidden text-white">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F87B1B]/5 to-transparent pointer-events-none" />

      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F87B1B]/50 to-transparent" />

      <div className="container relative px-6 py-12 mx-auto md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 pb-10 border-b md:grid-cols-2 lg:grid-cols-4 border-white/10">
          {/* Column 1: Branding & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Kamel Mesbahi Logo"
                className="w-auto h-10"
                width="40"
                height="40"
              />
              <div>
                <h3 className="text-xl font-bold">Kamel Mesbahi</h3>
                <p className="text-xs text-white/50">Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/60">
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
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-white/90">
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
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-white/90">
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
            <h4 className="mb-4 text-sm font-bold tracking-wider uppercase text-white/90">
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
          <p className="text-sm text-white/50">
            © {currentYear} Kamel Mesbahi. All rights reserved.
          </p>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#F87B1B] to-transparent" />
    </footer>
  );
};

export default memo(Footer);
