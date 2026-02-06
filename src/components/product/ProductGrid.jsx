import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  // Container variants for staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card appears 0.1s after the previous one
      },
    },
  };

  return (
    <section className="relative min-h-[400px]">
      {/* Decorative vertical line (Editorial touch) */}
      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/20 via-transparent to-transparent hidden xl:block" />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={products.length} // Re-animate when product count changes
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              layout // Smoothly re-arranges when filters change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Subtle bottom indicator */}
      {products.length > 0 && (
        <div className="mt-24 flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-600">
            End of Collection
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;