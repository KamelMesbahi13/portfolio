import MyPic from "../../../assets/mypictwo.png";

import {
  ArrowRight,
  Check,
  BarChart3,
  Settings,
  RefreshCw,
} from "lucide-react";

const paragraphs = [
  {
    id: 1,
    content: "You're struggling to scale and don't know what to prioritize.",
  },

  {
    id: 2,
    content: "You feel exhausted juggling too many roles in your business.",
  },

  {
    id: 3,
    content:
      "You crave a clear, personalized roadmap to grow faster and smarter.",
  },
];

const HomeAbout = () => {
  return (
    <section className="bg-[#151312] py-16 container w-full overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Feeling Stuck or Overwhelmed as a{" "}
              <span className="text-[#F87B1B]">Business Owner?</span>
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
              icon={<BarChart3 className="text-[#F87B1B]" />}
              title="Growth Stuck"
              description="Your business has plateaued, and you need fresh strategies to break through the ceiling."
            />

            {/* Item 2 */}
            <FeatureItem
              icon={<Settings className="text-[#F87B1B]" />}
              title="Wearing Hats"
              description="You're juggling everything alone—operations, marketing, sales—and it's draining your energy fast."
            />

            {/* Item 3 */}
            <FeatureItem
              icon={<RefreshCw className="text-[#F87B1B]" />}
              title="Lack Clarity"
              description="Without a clear roadmap, every decision feels risky, slow, and emotionally exhausting to make."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3 group">
    <div className="w-12 h-12 rounded-full border border-[#2a2826] bg-[#0C2B4E]/30 flex items-center justify-center mb-2 group-hover:border-[#F87B1B] transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-400">{description}</p>
  </div>
);

export default HomeAbout;
