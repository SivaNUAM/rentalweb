import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  FingerPrintIcon, 
  BeakerIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const About = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Parallax values for a cinematic feel
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={scrollRef} className="bg-[#050505] text-white selection:bg-amber-500/30">
      
      {/* --- 1. THE ARCHIVAL HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div style={{ scale: textScale }} className="relative z-20 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, tracking: "0.1em" }}
            animate={{ opacity: 1, tracking: "0.6em" }}
            className="text-amber-500 font-bold uppercase text-[9px] md:text-[11px] flex items-center justify-center gap-4"
          >
            <span className="w-8 h-px bg-amber-500/40" />
            Established MMXIV
            <span className="w-8 h-px bg-amber-500/40" />
          </motion.div>
          
          <h1 className="text-6xl md:text-[11rem] font-serif leading-[0.85] tracking-tighter">
            THE <br /> <span className="italic text-amber-200/90">SOUL</span>
          </h1>
          
          <p className="max-w-md mx-auto text-neutral-500 text-xs md:text-sm tracking-widest uppercase leading-loose">
            Redefining the weight of tradition. <br /> Luxury curated for the eternal muse.
          </p>
        </motion.div>

        {/* Cinematic Parallax Background */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1590548543347-669528652410?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Jewelry Archive"
          />
        </motion.div>
      </section>

      {/* --- 2. INTERACTIVE STATS STRIP --- */}
      <div className="border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4 divide-x-0 lg:divide-x divide-white/10">
          {[
            { label: "Vaulted Pieces", val: "2,500+" },
            { label: "Global Brides", val: "10,000+" },
            { label: "Cities Reached", val: "45+" },
            { label: "Curated Years", val: "12" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4 group">
              <span className="text-4xl md:text-5xl font-serif text-white mb-2 group-hover:text-amber-500 transition-colors">
                {stat.val}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. THE CRAFT BENTO GRID --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]" />
            <h2 className="text-4xl md:text-6xl font-serif mb-10 relative z-10 leading-tight">
              Honoring <br /> <span className="italic text-amber-500">Ancient</span> Artistry.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light relative z-10 max-w-lg">
              Every ornament in our vault is a bridge between generations. We source directly from heritage clusters in Bikaner and Hyderabad, ensuring that the soul of Indian craftsmanship remains vibrant and accessible.
            </p>
            <button className="mt-12 flex items-center gap-4 group/btn relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest border-b border-amber-500 pb-1">Our Provenance</span>
              <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Feature Stack */}
          <div className="lg:col-span-5 grid gap-8">
            <div className="bg-white text-black rounded-[3rem] p-12 flex flex-col justify-between group hover:bg-amber-500 transition-colors duration-500">
              <FingerPrintIcon className="w-10 h-10 mb-20" />
              <div>
                <h3 className="text-2xl font-serif mb-2">Unique Identity</h3>
                <p className="text-sm opacity-70">No two pieces are alike. Each carries a distinct artisan signature.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between group">
              <ShieldCheckIcon className="w-10 h-10 text-amber-500 mb-20" />
              <div>
                <h3 className="text-2xl font-serif mb-2">Purity Vault</h3>
                <p className="text-neutral-500 text-sm">Certified gold and conflict-free gemstones for every rental.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FOUNDER'S VISION (Cinematic) --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif text-white/[0.01] select-none whitespace-nowrap">
          The Visionary
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative aspect-[3/4] md:aspect-square group overflow-hidden rounded-[4rem]">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Ananya Sharma"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-3xl font-serif">Ananya Sharma</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Founder & CEO</p>
            </div>
          </div>

          <div className="space-y-12 px-4 md:px-12">
            <BeakerIcon className="w-12 h-12 text-amber-900" />
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              "We aren't just <span className="italic">renting</span> gold; we are sharing <span className="text-amber-200">confidence</span>."
            </h2>
            <p className="text-neutral-500 leading-loose font-light">
              Starting OrnaRent was an act of rebellion against the idea that luxury must be owned to be enjoyed. Our journey began with 10 pieces and a dream to make every woman feel like the masterpiece she already is. Today, that dream lives in every bride we dress.
            </p>
            <div className="pt-8">
               <img src="/signature.svg" alt="Signature" className="h-16 invert opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. THE MODERN ARCHIVE CTA --- */}
      <section className="py-40 bg-white text-black rounded-t-[5rem]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <SparklesIcon className="w-12 h-12 mx-auto mb-10 text-amber-600" />
          <h2 className="text-5xl md:text-[6vw] font-serif tracking-tighter mb-12">Ready to Enter <br /> <span className="italic">The Archive?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-black text-white rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-amber-600 transition-colors">
              Explore Collection
            </button>
            <button className="px-12 py-5 border border-black/10 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-black hover:text-white transition-all">
              Book a Curator
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;