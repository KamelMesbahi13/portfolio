import mypic from "../../../assets/mypic.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="w-full mb-4 lg:sticky md:mb-0 lg:top-32 h-fit">
      <div className="relative p-6 bg-white shadow-2xl rounded-3xl">
        <div className="relative mb-6">
          <div className="overflow-hidden bg-secondColor aspect-square rounded-2xl">
            <img
              src={mypic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-secondColor"
            animate={{
              x: [-30, -60, -60, -30, 0, 0, -30],
              y: [0, 0, 30, 60, 60, 30, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: "-12px", bottom: "-12px" }}
          />
        </div>

        <motion.div
          className="absolute w-16 h-16 border-2 border-dashed rounded-full border-secondColor"
          animate={{ rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: "10px",
            right: "0px",
          }}
        />

        {/* Name with underline animation */}
        <div className="relative mb-4">
          <p className="text-2xl font-semibold text-black md:text-4xl">
            Mesbahi Kamel
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-black md:text-base">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
