import { motion } from "framer-motion";
import { TrashIcon, CalendarDaysIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { formatINR, calculateRentalPrice } from "../../utils/helper";
import useCart from "../../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, updateRentalDays } = useCart();

  const itemTotal = calculateRentalPrice(
    item.pricePerDay,
    item.rentalDays
  );

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group relative flex flex-col sm:flex-row gap-6 py-8 border-b border-white/5 items-center sm:items-start"
    >
      {/* 1. IMAGE WITH AMBIENT GLOW */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 2. PRODUCT DETAILS & CONTROLS */}
      <div className="flex-1 flex flex-col justify-between h-full w-full">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-serif tracking-tight text-white mb-1 group-hover:text-amber-200 transition-colors">
                {item.name}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500/80">
                Heritage Collection
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-lg font-serif text-white">
                {formatINR(itemTotal)}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-neutral-500 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest italic">Rate:</span>
              <span className="text-xs text-neutral-300">{formatINR(item.pricePerDay)}/day</span>
            </div>
          </div>
        </div>

        {/* 3. QUANTITY & REMOVE ACTIONS */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center bg-[#111] border border-white/10 rounded-full p-1 shadow-inner">
            <button 
              onClick={() => updateRentalDays(item.id, Math.max(1, item.rentalDays - 1))}
              className="p-2 hover:text-amber-500 transition-colors disabled:opacity-20"
              disabled={item.rentalDays <= 1}
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            
            <div className="px-4 flex items-center gap-2">
              <CalendarDaysIcon className="w-4 h-4 text-amber-500/50" />
              <span className="text-sm font-bold min-w-[2ch] text-center">{item.rentalDays}</span>
              <span className="text-[9px] uppercase tracking-tighter text-neutral-500 font-bold">Days</span>
            </div>

            <button 
              onClick={() => updateRentalDays(item.id, item.rentalDays + 1)}
              className="p-2 hover:text-amber-500 transition-colors"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="flex items-center gap-2 text-neutral-600 hover:text-red-400 transition-all duration-300 group/trash"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/trash:opacity-100 -translate-x-2 group-hover/trash:translate-x-0 transition-all">
              Remove
            </span>
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MOBILE PRICE VIEW */}
      <div className="sm:hidden w-full flex justify-between border-t border-white/5 pt-4 mt-2">
        <span className="text-xs uppercase tracking-widest text-neutral-500">Subtotal</span>
        <span className="text-lg font-serif text-amber-500">{formatINR(itemTotal)}</span>
      </div>
    </motion.div>
  );
};

export default CartItem;