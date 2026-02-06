import { useState, useMemo } from "react";
import productsData from "../data/products"; 
import ProductGrid from "../components/product/ProductGrid";
import { 
  MagnifyingGlassIcon, 
  ChevronDownIcon,
  SparklesIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const categories = ["All", "Bridal", "Temple", "Polki", "Kundan", "Minimalist"]; 

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  const displayedProducts = useMemo(() => {
    let result = productsData;
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => p.name.toLowerCase().includes(q));
    }
    // Sorting Logic
    if (sortOption === "price-low") result = [...result].sort((a, b) => a.pricePerDay - b.pricePerDay);
    if (sortOption === "price-high") result = [...result].sort((a, b) => b.pricePerDay - a.pricePerDay);
    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      
      {/* --- 1. CINEMATIC HEADER --- */}
      <div className="relative py-16 md:py-24 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]"
          >
            The Archive
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-serif mt-4 mb-6 leading-tight"
          >
            Explore <span className="italic text-amber-200">The Vault</span>
          </motion.h1>
          <p className="text-neutral-500 max-w-xl mx-auto text-xs md:text-sm leading-relaxed italic px-4">
            "Every piece tells a story of royalty. Select your heritage for the day."
          </p>
        </div>
      </div>

      {/* --- 2. STICKY GLASS CONTROLS --- */}
      <div className="top-16 md:top-20 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-4 md:space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between">
            {/* Search Box - Full width on mobile */}
            <div className="relative w-full lg:max-w-md group">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 group-focus-within:text-amber-500 transition-colors" />
              <input
                type="text"
                placeholder="Search pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-neutral-700"
              />
            </div>

            {/* Sort Dropdown - Responsive sizing */}
            <div className="relative w-full lg:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full appearance-none bg-white/5 border border-white/10 rounded-full px-6 py-3 pr-12 text-[9px] md:text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
            </div>
          </div>

          {/* Category Scroller - Left Aligned on Mobile, Centered on Desktop */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="
                flex 
                gap-3 
                md:gap-6 
                overflow-x-auto 
                pb-2
                no-scrollbar 
                w-full 
                justify-start 
                lg:justify-center 
                snap-x
                scroll-smooth
                [mask-image:linear-gradient(to_right,white_80%,transparent)]
                md:[mask-image:none]
              "
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-5 
                    py-2 
                    rounded-full 
                    text-[9px] 
                    md:text-[10px] 
                    font-bold 
                    uppercase 
                    tracking-[0.2em] 
                    transition-all 
                    duration-300
                    whitespace-nowrap 
                    snap-start
                    flex-shrink-0
                    ${
                      selectedCategory === cat 
                        ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]" 
                        : "bg-white/5 text-neutral-500 border border-white/5 hover:border-white/20"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Active Info Bar */}
        <div className="flex flex-row items-center justify-between mb-8 md:mb-12">
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            Archive: <span className="text-white">{displayedProducts.length} Pieces</span>
          </p>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-amber-500 hover:text-white transition-all"
            >
              <XMarkIcon className="w-3 h-3" /> Reset
            </button>
          )}
        </div>

        {/* Product Grid - Handles its own responsive columns */}
        <AnimatePresence mode="wait">
          {displayedProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 md:py-32 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-white/[0.02] px-4"
            >
              <SparklesIcon className="h-10 w-10 md:h-12 md:w-12 mx-auto text-amber-900 mb-6" />
              <h3 className="text-xl md:text-2xl font-serif mb-2">The Vault is Silent</h3>
              <p className="text-neutral-500 text-xs md:text-sm italic">Try adjusting your filters to discover hidden gems.</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductGrid products={displayedProducts} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- 4. LUXURY CTA --- */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-[#0D0D0D] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 italic">Looking for a Masterpiece?</h2>
          <p className="text-neutral-500 text-xs md:text-sm mb-10 tracking-wide leading-relaxed px-4">
            Our private archive contains exclusive bridal pieces not shown online. 
            Connect with a personal curator for a private viewing.
          </p>
          <button className="w-full sm:w-auto px-12 py-4 bg-transparent border border-amber-500/50 text-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition-all font-bold uppercase text-[10px] tracking-[0.3em]">
            Request Private Access
          </button>
        </div>
      </section>

      {/* Add to Global CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Products;