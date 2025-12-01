// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import MyPic from "../../../assets/mypictwo.webp";
import {
  ArrowRight,
  Check,
  TrendingDown,
  BrainCircuit,
  Puzzle,
} from "lucide-react";

// ✅ Move static data outside
const PARAGRAPHS = [
  {
    id: 1,
    content:
      "You need a developer who can build fast, modern, and scalable web solutions tailored to your business.",
  },
  {
    id: 2,
    content:
      "You feel stuck with a website that's slow, outdated, or impossible to manage.",
  },
  {
    id: 3,
    content:
      "You're losing clients because your online presence doesn't look professional or convert well.",
  },
];

const FEATURES = [
  {
    icon: TrendingDown,
    title: "Website Not Performing",
    description:
      "Your website isn't bringing results — it's slow, poorly designed, or not user-friendly, and it's hurting your business.",
  },
  {
    icon: BrainCircuit,
    title: "Tech Overload",
    description:
      "Managing your website, design, content, and social media alone is draining — you need someone who can handle the technical work professionally.",
  },
  {
    icon: Puzzle,
    title: "No Clear Digital Strategy",
    description:
      "You're unsure how to structure your site, improve the design, or scale it with the right tech — every change feels risky and time-consuming.",
  },
];

// ✅ Move animation variants outside
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// ✅ Memoize FeatureItem
const FeatureItem = memo(({ icon, title, description, index }) => {
  const IconComponent = icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInRight}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col gap-3 group"
    >
      {/* Simplified icon animation - use CSS instead */}
      <div className="w-12 h-12 rounded-full border border-[#2a2826] bg-[#0C2B4E]/30 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-[#F87B1B]">
        <IconComponent className="text-[#F87B1B] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  );
});

FeatureItem.displayName = "FeatureItem";

FeatureItem.displayName = "FeatureItem";

// ✅ Memoize CheckItem
const CheckItem = memo(({ item, index, isInView }) => {
  return (
    <motion.li
      variants={fadeInUp}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex items-start gap-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          delay: 0.6 + index * 0.15,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "#F87B1B",
          borderColor: "#F87B1B",
        }}
        className="mt-1 min-w-[24px] h-6 w-6 rounded-full bg-[#0C2B4E] flex items-center justify-center border border-gray-700 cursor-pointer transition-colors"
      >
        <Check size={14} className="text-white" />
      </motion.div>
      <p className="text-sm leading-relaxed text-gray-300">{item.content}</p>
    </motion.li>
  );
});

CheckItem.displayName = "CheckItem";

// ✅ Simplified Image Component
const HeroImage = memo(() => {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={imageRef}
      initial="hidden"
      animate={imageInView ? "visible" : "hidden"}
      variants={scaleIn}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative h-full min-h-[400px] lg:min-h-[600px] w-full"
    >
      {/* Simplified hover effect using CSS */}
      <div className="relative w-full h-full overflow-hidden group rounded-3xl">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F87B1B]/0 via-[#F87B1B]/30 to-[#F87B1B]/0 opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
          <img
            src={MyPic}
            alt="Mesbahi Kamel"
            className="absolute inset-0 object-cover w-full h-full shadow-2xl rounded-3xl"
            loading="lazy"
            width="600"
            height="800"
          />

          {/* Single overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#151312]/40 to-transparent pointer-events-none transition-opacity duration-400 group-hover:opacity-30" />

          {/* CSS shine effect */}
          <div className="absolute inset-0 pointer-events-none shine-effect rounded-3xl" />
        </div>

        {/* Corner accents - simplified */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-4 border-b-4 border-[#F87B1B] rounded-br-3xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
        <div className="absolute -top-2 -left-2 w-24 h-24 border-l-4 border-t-4 border-[#F87B1B] rounded-tl-3xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
});

HeroImage.displayName = "HeroImage";

// ✅ Main component
const HomeAbout = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const leftColumnInView = useInView(leftColumnRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div
      ref={sectionRef}
      className="container w-full mt-12 overflow-hidden md:mt-20"
    >
      <div>
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column */}
          <motion.div
            ref={leftColumnRef}
            initial="hidden"
            animate={leftColumnInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInLeft}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
            >
              Struggling to Fix or Improve{" "}
              <motion.span
                className="text-[#F87B1B] inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={leftColumnInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Your Website?
              </motion.span>
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#F87B1B] hover:bg-[#e06a10] transition-colors text-white font-semibold rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-lg shadow-orange-900/20"
              >
                <span>Let's Find</span>
                <motion.div
                  className="bg-white text-[#F87B1B] rounded-full p-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight size={18} strokeWidth={3} />
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.ul variants={staggerContainer} className="mt-4 space-y-6">
              {PARAGRAPHS.map((item, index) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  index={index}
                  isInView={leftColumnInView}
                />
              ))}
            </motion.ul>
          </motion.div>

          {/* Center - Image */}
          <HeroImage />

          {/* Right Column - Features */}
          <div className="space-y-10 lg:pl-4">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeAbout);
