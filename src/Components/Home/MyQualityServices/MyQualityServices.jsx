import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Web Development",
    summary:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
    details: [
      "Responsive, accessible, and performant builds",
      "Next.js / React, Tailwind, TypeScript",
      "API integration and state management",
      "SEO, SSR/SSG, analytics",
    ],
  },
  {
    id: "02",
    title: "UI/UX Design",
    summary:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
    details: [
      "Wireframes, user flows, interactive prototypes",
      "Design systems and components",
      "Usability testing and iterations",
    ],
  },
  {
    id: "03",
    title: "Content Writing",
    summary:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
    details: [
      "Website and product copy",
      "Blog strategy and editorial guidelines",
      "Tone-of-voice and brand messaging",
    ],
  },
  {
    id: "04",
    title: "Branding",
    summary:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
    details: [
      "Logo, palette, and typography",
      "Brand system and guidelines",
      "Assets for marketing and socials",
    ],
  },
  {
    id: "05",
    title: "SEO & Marketing",
    summary:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...",
    details: [
      "Technical SEO audit & fixes",
      "On-page optimization & schema",
      "Campaign strategy and tracking",
    ],
  },
];

// Fade-up on scroll
const useReveal = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShow(true)),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, show };
};

const ArrowIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 transition-transform duration-300 ${
      open ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const MyQualityServices = () => {
  const [open, setOpen] = useState(0);
  const { ref, show } = useReveal();

  return (
    <section
      id="services"
      className="relative bg-[#0B0B10] text-white py-20 md:py-28"
    >
      {/* top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F87B1B]/45 to-transparent" />

      <div className="max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-[#F87B1B] to-[#0C2B4E] bg-clip-text text-transparent">
              My Quality Services
            </span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-base md:text-lg text-white/70">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        {/* List */}
        <ul className="mt-12 space-y-6 md:mt-16">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li
                key={s.id}
                className="relative overflow-hidden border group rounded-xl border-white/10"
              >
                {/* brand gradient on hover / active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#0C2B4E] to-[#F87B1B] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <button
                  onClick={() => setOpen((prev) => (prev === i ? -1 : i))}
                  className="relative z-10 w-full px-6 py-6 text-left sm:px-8"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-semibold tracking-widest ${
                        isOpen ? "text-white/85" : "text-white/60"
                      }`}
                    >
                      {s.id}
                    </span>

                    <h3 className="text-2xl md:text-[28px] font-extrabold flex-1">
                      {s.title}
                    </h3>

                    <span
                      className={`shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-white/15 text-white"
                          : "bg-white/5 text-white/70 group-hover:text-white"
                      }`}
                      aria-hidden
                    >
                      <ArrowIcon open={isOpen} />
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm md:text-base transition-colors ${
                      isOpen ? "text-white/90" : "text-white/70"
                    }`}
                  >
                    {s.summary}
                  </p>

                  <div className="w-full h-px mt-6 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>

                {/* Accordion */}
                <div
                  className={`relative z-10 px-6 sm:px-8 pb-6 grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="grid gap-2 mt-2 text-sm md:text-base text-white/90 md:grid-cols-2">
                      {s.details.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#F87B1B]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* optional scroll-to-top */}
      <a
        href="#top"
        className="fixed flex items-center justify-center text-white transition border rounded-full bottom-6 right-6 md:bottom-10 md:right-10 h-11 w-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/10"
        aria-label="Scroll to top"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </a>
    </section>
  );
};

export default MyQualityServices;
