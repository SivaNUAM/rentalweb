import { motion } from "framer-motion";
import { HeartIcon, ShoppingBagIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import useCart from "../../hooks/useCart";
import { formatINR, truncateText } from "../../utils/helper";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // 2. Initialize navigate

  const handleNavigate = () => {
    navigate(`/products/${product.id}`); // Navigates to details page
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // 3. Make the whole card clickable
      onClick={handleNavigate}
      className="group relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 cursor-pointer"
    >
      {/* --- IMAGE SECTION --- */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Wishlist Icon */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevents navigation
            // Add wishlist logic here
          }}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-amber-500 hover:text-black transition-all"
        >
          <HeartIcon className="w-5 h-5" />
        </button>

        {/* Exclusive Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-[8px] font-bold uppercase tracking-widest text-black">
            <SparklesIcon className="w-3 h-3" /> Exclusive
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />

        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // 4. Critical: Prevents redirecting when clicking Add to Cart
              addToCart(product, 1);
            }}
            className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-amber-500 hover:text-white"
          >
            <ShoppingBagIcon className="w-4 h-4" />
            Instant Reserve
          </button>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.3em]">
            {product.category || "Heritage Collection"}
          </p>
          <h3 className="text-xl font-serif text-white group-hover:text-amber-200 transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-xs text-neutral-500 leading-relaxed font-light">
          {truncateText(product.description, 60)}
        </p>

        {/* Pricing Architecture */}
        <div className="pt-4 border-t border-white/5 flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-neutral-600 mb-1">Rental Fee</span>
            <span className="text-xl font-serif text-white">
              {formatINR(product.pricePerDay)}
              <span className="text-[10px] text-neutral-500 ml-1 font-sans">/ day</span>
            </span>
          </div>
          
          <div className="text-right">
            <span className="block text-[8px] uppercase tracking-widest text-neutral-600 mb-1">Security Vault</span>
            <span className="text-[11px] text-neutral-400 font-medium italic">
              + {formatINR(product.securityDeposit)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;