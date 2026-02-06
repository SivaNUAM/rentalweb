import { motion } from "framer-motion";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const ProductFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="w-full">
      {/* Mobile Header: Label + Filter Icon */}
      <div className="flex items-center justify-between mb-4 md:mb-6 px-1">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 md:w-8 bg-amber-500/50" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">
            Select Collection
          </span>
        </div>
        
        {/* Mobile-only Filter Button (Optional Visual) */}
        <button className="md:hidden text-amber-500">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Container with Gradient Fade */}
      <div className="relative group">
        {/* Left Gradient Fade (Mobile) */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none md:hidden" />
        
        {/* The Scrollable Row */}
        <div className="flex items-center gap-x-8 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2 snap-x">
          {categories.map((category) => {
            const isActive = selected === category;
            
            return (
              <button
                key={category}
                onClick={() => onChange(category)}
                className="group relative py-2 outline-none flex-shrink-0 snap-start"
              >
                <span
                  className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                    isActive 
                      ? "text-amber-500" 
                      : "text-neutral-500 group-hover:text-white"
                  }`}
                >
                  {category}
                </span>

                {/* Animated Indicator */}
                {isActive ? (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-amber-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white/10 transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Gradient Fade (Mobile) */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none md:hidden" />
      </div>
      
      {/* Bottom Border */}
      <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />
    </div>
  );
};

export default ProductFilter;