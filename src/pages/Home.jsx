import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  ChevronRightIcon,
  StarIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterTextIcon,
  FingerPrintIcon,
  VideoCameraIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [filter, setFilter] = useState("All");

  const featuredProducts = useMemo(() => {
    let items = [...products];
    if (filter !== "All") {
      items = items.filter(p => p.tags.includes(filter.toLowerCase()));
    }
    return items.slice(0, 8);
  }, [filter]);

  const testimonials = [
    { 
      name: "Sanya Malhotra", 
      event: "Winter Wedding '25", 
      quote: "The Polki set was breathtaking. It felt like wearing a piece of history without the multi-lakh price tag.",
      image: "https://images.unsplash.com/photo-1630030538557-c874c09ac8a1?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Riya Kapoor", 
      event: "Reception Gala", 
      quote: "The concierge service is world-class. They helped me match my necklace to my lehenga perfectly.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0F0F0F] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Luxury Bridal Background"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
              The Finest Rental Boutique in India
            </span>
            <h1 className="text-6xl md:text-[9rem] font-serif leading-none mb-10 tracking-tighter">
              The <span className="italic font-light text-amber-200">Gilded</span> <br /> Vault
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link to="/products" className="group relative px-14 py-5 overflow-hidden rounded-full border border-amber-500/50 text-amber-400">
                <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative group-hover:text-black font-bold transition-colors uppercase tracking-widest text-xs">Enter The Archive</span>
              </Link>
              <button className="flex items-center gap-3 text-white/50 hover:text-amber-200 transition-colors uppercase tracking-widest text-[10px] font-bold">
                <VideoCameraIcon className="w-5 h-5 text-amber-500" />
                Watch The Film
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE CURATOR'S SELECTION (ASSETS) --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Heritage Polki" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10"><h3 className="text-2xl font-serif">Heritage Polki</h3></div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:translate-y-20">
              <img src="https://images.unsplash.com/photo-1630030538557-c867c2cd3a7b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Temple Gold" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10"><h3 className="text-2xl font-serif">Temple Gold</h3></div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Modern Diamond" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10"><h3 className="text-2xl font-serif">Modern Diamond</h3></div>
            </div>
        </div>
      </section>

      {/* --- 3. THE COLLECTION GRID --- */}
      <section className="py-32 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-4xl font-serif">Live from <span className="text-amber-500 italic">the Archive</span></h2>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
              {["All", "Bridal", "Minimalist"].map(t => (
                <button key={t} onClick={() => setFilter(t)} className={`${filter === t ? 'text-amber-500' : 'text-neutral-600'} hover:text-white transition-colors`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TESTIMONIALS --- */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-12">
            <h2 className="text-5xl font-serif italic">"I felt like the jewellery was curated specifically for my story."</h2>
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex gap-6 items-center border-l border-amber-500/30 pl-8">
                <img src={t.image} className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/20" alt={t.name} />
                <div>
                  <p className="text-neutral-400 italic text-sm mb-2">"{t.quote}"</p>
                  <p className="text-xs font-bold uppercase tracking-widest">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 relative group">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative">
               <img src="https://images.unsplash.com/photo-1596459864402-78f4ad8322d3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Testimonial Model" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-amber-500/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl shadow-amber-500/20">
                    <PlayIcon className="w-6 h-6 text-black fill-current" />
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#121212] p-8 rounded-2xl border border-white/5 shadow-2xl">
               <div className="flex gap-1 mb-2">
                 {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-3 h-3 text-amber-500" />)}
               </div>
               <p className="text-[10px] font-bold uppercase tracking-widest">2,500+ Verified Brides</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CONCIERGE --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/20">
              <FingerPrintIcon className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-5xl font-serif mb-8">Bespoke <br /> Styling Room</h2>
            <p className="text-neutral-500 leading-relaxed mb-10 max-w-sm italic">Access our private stylists via encrypted video call to match your jewellery with your bridal couture.</p>
            <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-amber-500 pb-2 hover:text-amber-500 transition-colors">
              Schedule Consultation <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl" alt="Stylist Session" />
            <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
               <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-amber-500 mb-2" />
               <p className="text-[10px] font-bold uppercase tracking-widest">24/7 Concierge</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;