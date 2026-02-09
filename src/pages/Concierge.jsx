import { motion } from "framer-motion";
import { 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  SparklesIcon, 
  UserGroupIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";

const Concierge = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500/30">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1590548543347-669528652410?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110 blur-sm"
            alt="Luxury Atelier"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            Personal Styling & Support
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif mb-8"
          >
            The <span className="italic text-amber-200">Private</span> Service
          </motion.h1>
          <p className="text-neutral-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic">
            "Your bridal journey deserves more than just a checkout button. Connect with our curators for a tailored experience."
          </p>
        </div>
      </section>

      {/* --- 2. SERVICE TILES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Virtual Fitting",
              desc: "A 30-minute high-definition video call to see the jewelry's shine and scale in real-time.",
              icon: VideoCameraIcon,
            },
            {
              title: "Trousseau Curation",
              desc: "Work with a stylist to match pieces with your specific bridal lehenga or gown embroidery.",
              icon: SparklesIcon,
            },
            {
              title: "Heritage Care",
              desc: "Learn about the craftsmanship, metal purity, and safety protocols of our vault pieces.",
              icon: UserGroupIcon,
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/40 transition-all group"
            >
              <service.icon className="w-8 h-8 text-amber-500 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif mb-4 text-white">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. THE REQUEST FORM --- */}
      <section className="py-24 px-6 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-4xl font-serif mb-8">Begin Your <br /> <span className="text-amber-500 italic">Consultation</span></h2>
            <p className="text-neutral-400 mb-12 text-sm leading-relaxed tracking-wide">
              Fill out the archive request below. Our lead curator will contact you within 4 hours to arrange a private viewing.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <CalendarDaysIcon className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Available Hours</h4>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">Mon — Sat / 10AM — 8PM IST</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Direct Line</h4>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">+91 (800) VAULT- concierge</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Full Name</label>
                <input type="text" placeholder="E.g. Sanya Malhotra" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Wedding Date</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-neutral-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Service Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none text-neutral-500">
                <option>Virtual Styling Session</option>
                <option>In-Person Studio Visit</option>
                <option>Bridal Trousseau Planning</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-4">Message</label>
              <textarea rows="4" placeholder="Tell us about your outfit and preferences..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"></textarea>
            </div>

            <button className="w-full bg-amber-500 text-black font-bold uppercase text-xs tracking-[0.3em] py-5 rounded-2xl hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.2)]">
              Submit Request
            </button>
          </form>

        </div>
      </section>

      {/* --- 4. THE PROMISE --- */}
      <section className="py-24 px-6 text-center max-w-2xl mx-auto">
        <SparklesIcon className="w-10 h-10 text-amber-900 mx-auto mb-8" />
        <h3 className="text-2xl font-serif italic mb-4">"The NYKSHA is not just about rent; it's about making you feel like royalty for a lifetime of memories."</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">— Lead Curator, NYKSHA</p>
      </section>

    </div>
  );
};

export default Concierge;