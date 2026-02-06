import { motion } from "framer-motion";
import { CheckBadgeIcon, SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full text-center"
    >
      {/* Animated Icon */}
      <motion.div 
        initial={{ rotate: -20, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="w-24 h-24 bg-amber-500 rounded-full mx-auto flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
      >
        <CheckBadgeIcon className="w-14 h-14 text-black" />
      </motion.div>

      <h2 className="text-5xl font-serif text-white mb-4">Secured.</h2>
      <p className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-10">
        Your Archive has been reserved
      </p>

      <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 mb-10 space-y-4 text-left">
        <div className="flex justify-between items-center border-b border-white/5 pb-4">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Order Ref</span>
          <span className="text-xs font-mono text-white uppercase">VT-{Math.random().toString(36).substr(2, 8)}</span>
        </div>
        <div className="pt-2">
          <p className="text-sm text-neutral-400 font-light leading-relaxed italic">
            "An expert concierge is currently preparing your selection. You will receive a secure communication shortly to finalize delivery."
          </p>
        </div>
      </div>

      <button 
        onClick={() => navigate('/products')}
        className="group flex items-center gap-3 mx-auto text-white hover:text-amber-500 transition-colors"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Continue Exploring</span>
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default OrderSuccess;