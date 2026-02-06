import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CreditCardIcon, 
  ShieldCheckIcon, 
  InformationCircleIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import useCart from "../../hooks/useCart";
import Button from "../common/Button";
import { formatINR, calculateCartTotals } from "../../utils/helper";
import { useLocation } from "react-router-dom";

const CartSummary = () => {
  const { cartItems, clearCart } = useCart();
  const { rentalTotal, depositTotal, grandTotal } = calculateCartTotals(cartItems);
  const navigate = useNavigate();
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <div className={`${!isCheckoutPage && 'sticky top-32'}`}>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 backdrop-blur-3xl overflow-hidden relative"
      >
        {/* Cinematic Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

        <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
          <CreditCardIcon className="w-6 h-6 text-amber-500/50" />
          Summary
        </h2>

        <div className="space-y-6">
          {/* RENTAL SUBTOTAL */}
          <div className="flex justify-between items-center group">
            <span className="text-neutral-400 text-sm font-light tracking-wide group-hover:text-white transition-colors">
              Archive Rental Total
            </span>
            <span className="text-white font-serif tracking-tight">{formatINR(rentalTotal)}</span>
          </div>

          {/* SECURITY DEPOSIT */}
          <div className="flex justify-between items-start group">
            <div className="flex flex-col">
              <span className="text-neutral-400 text-sm font-light tracking-wide flex items-center gap-1.5 group-hover:text-white transition-colors">
                Refundable Deposit
                <InformationCircleIcon className="w-3.5 h-3.5 text-neutral-600" />
              </span>
              <span className="text-[9px] text-amber-500/60 uppercase tracking-widest mt-1.5">
                Returned upon inspection
              </span>
            </div>
            <span className="text-white font-serif tracking-tight">{formatINR(depositTotal)}</span>
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

          {/* GRAND TOTAL */}
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 mb-1">
                Total Payable
              </span>
              <span className="text-neutral-500 text-[9px] uppercase tracking-widest leading-none">
                Insurance & Taxes Included
              </span>
            </div>
            <span className="text-3xl font-serif text-white tracking-tighter">
              {formatINR(grandTotal)}
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        {!isCheckoutPage && (
          <div className="space-y-4 mt-10">
            <Button 
              onClick={() => navigate('/checkout')}
              className="w-full h-14 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-500 flex items-center justify-center gap-2 group/btn"
            >
              Proceed to Checkout
              <ArrowRightIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            
            <button 
              onClick={clearCart}
              className="w-full py-2 text-neutral-600 hover:text-red-400 text-[9px] font-bold uppercase tracking-[0.3em] transition-colors"
            >
              Clear Selection
            </button>
          </div>
        )}

        {/* TRUST SIGNALS */}
        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center gap-2">
            <ShieldCheckIcon className="w-5 h-5 text-neutral-600" />
            <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-500 leading-tight">
              Insured <br /> Delivery
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" 
            />
            <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-500 leading-tight">
              Verified <br /> Authentic
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartSummary;