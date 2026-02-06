import { motion } from "framer-motion";

const Loader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050505]"
  >
    <div className="relative flex flex-col items-center">
      {/* Breathing Logo */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-white"
      >
        THE <span className="italic text-amber-500 font-light">VAULT</span>
      </motion.div>

      {/* Elegant Progress Line */}
      <div className="mt-8 w-32 h-[1px] bg-white/5 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-full w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
      </div>
    </div>
  </motion.div>
);

export default Loader;