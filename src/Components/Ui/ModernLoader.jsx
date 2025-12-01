// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ModernLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-24 h-24 border-4 border-transparent border-t-[#F87B1B] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-16 h-16 border-4 border-transparent rounded-full border-l-white/20 border-r-white/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Core */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 bg-[#F87B1B] rounded-full shadow-[0_0_15px_#F87B1B]"
        />
      </div>

      {/* Text Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute mt-32 text-sm font-medium tracking-[0.3em] text-white/50"
      >
        LOADING
      </motion.p>
    </div>
  );
};

export default ModernLoader;
