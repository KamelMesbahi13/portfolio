import MyPic from "../../../assets/mypictwo.png";

import {
  ArrowRight,
  Check,
  TrendingDown,
  BrainCircuit,
  Puzzle,
} from "lucide-react";

const paragraphs = [
  {
    id: 1,
    content:
      "You need a developer who can build fast, modern, and scalable web solutions tailored to your business.",
  },

  {
    id: 2,
    content:
      "You feel stuck with a website that’s slow, outdated, or impossible to manage.",
  },

  {
    id: 3,
    content:
      "You're losing clients because your online presence doesn’t look professional or convert well.",
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3 group">
    <div className="w-12 h-12 rounded-full border border-[#2a2826] bg-[#0C2B4E]/30 flex items-center justify-center mb-2 group-hover:border-[#F87B1B] transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-400">{description}</p>
  </div>
);

const HomeAbout = () => {
  return (
    <section className="container w-full my-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Struggling to Fix or Improve{" "}
              <span className="text-[#F87B1B]">Your Website?</span>
            </h2>

            <button className="group bg-[#F87B1B] hover:bg-[#e06a10] transition-colors text-white font-semibold rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-lg shadow-orange-900/20">
              <span>Let's Find</span>
              <div className="bg-white text-[#F87B1B] rounded-full p-2 transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} strokeWidth={3} />
              </div>
            </button>

            <ul className="mt-4 space-y-6">
              {paragraphs.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px] h-6 w-6 rounded-full bg-[#0C2B4E] flex items-center justify-center border border-gray-700">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full">
            <img
              src={MyPic}
              alt="Business owner portrait"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/50 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#151312]/40 to-transparent pointer-events-none"></div>
          </div>

          <div className="space-y-10 lg:pl-4">
            <FeatureItem
              icon={<TrendingDown className="text-[#F87B1B]" />}
              title="Website Not Performing"
              description="Your website isn’t bringing results — it’s slow, poorly designed, or not user-friendly, and it’s hurting your business."
            />

            <FeatureItem
              icon={<BrainCircuit className="text-[#F87B1B]" />}
              title="Tech Overload"
              description="Managing your website, design, content, and social media alone is draining — you need someone who can handle the technical work professionally."
            />

            <FeatureItem
              icon={<Puzzle className="text-[#F87B1B]" />}
              title="No Clear Digital Strategy"
              description="You’re unsure how to structure your site, improve the design, or scale it with the right tech — every change feels risky and time-consuming."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
