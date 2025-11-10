import { useEffect, useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ from = 0, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const HeroFirstContent = () => {
  return (
    <div className="space-y-4 md:container ">
      <div>
        <div className="mb-3 md:mb-4">
          <div className="flex flex-col -space-y-4 leading-none">
            <div className="text-[2.5rem] md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter">
              <p className="text-white">WEB</p>
            </div>
            <div className="text-[2.5rem] md:!-mt-[40px] !-mt-[20px] md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter">
              <p className="text-mainColor">DEVELOPER</p>
            </div>
          </div>
        </div>
        <div>
          <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:text-lg">
            Full-stack MERN developer dedicated to crafting efficient, scalable,
            and visually appealing web solutions that bring ideas to life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-0 md:pt-0 lg:gap-12">
        <div>
          <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
            <p>
              +<Counter to={4} />
            </p>
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            <p>YEARS OF</p>
            <p>EXPERIENCE</p>
          </div>
        </div>

        <div>
          <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
            <p>
              +<Counter to={30} />
            </p>
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            <p>PROJECTS</p>
            <p>COMPLETED</p>
          </div>
        </div>

        <div>
          <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
            <p>
              +<Counter to={25} />
            </p>
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            <p>SATISFIED</p>
            <p>CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFirstContent;
