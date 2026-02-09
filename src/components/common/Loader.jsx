import { motion } from "framer-motion";
// Import your logo
import images from "../../assets/images.png";
const Loader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505]"
  >
    <div className="relative flex flex-col items-center">
      
      {/* 1. ANIMATED LOGO IMAGE */}
      <motion.div
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [0.98, 1, 0.98] 
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="mb-6"
      >
        <img 
          src={images} 
          alt="NYK SHA Logo" 
          className="h-20 w-auto md:h-24 object-contain brightness-110" 
        />
      </motion.div>

      {/* 2. BREATHING TEXT */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-white"
      >
        NYKSHA<span className="italic text-amber-500 font-light"></span>
      </motion.div>

      {/* 3. ELEGANT PROGRESS LINE */}
      <div className="mt-8 w-40 h-[1px] bg-white/5 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          className="h-full w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
      </div>
      
      {/* Subtle background glow for extra luxury feel */}
      <div className="absolute -z-10 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full" />
    </div>
  </motion.div>
);

export default Loader;