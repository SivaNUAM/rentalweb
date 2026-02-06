import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, differenceInDays } from "date-fns";
import {
  ShieldCheckIcon,
  ArrowPathIcon,
  TruckIcon,
  StarIcon,
  ShoppingBagIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import products from "../data/products";
import Button from "../components/common/Button";
import useCart from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [range, setRange] = useState();

  const handleBooking = () => {
    if (range?.from && range?.to) {
      const rentalDays = differenceInDays(range.to, range.from) + 1;
      addToCart(product, rentalDays);
      navigate("/cart");
    }
  };

  let datePickerFooter = <p className="text-xs text-neutral-500">Please select the first and last day of your rental.</p>;
  if (range?.from) {
    if (!range.to) {
      datePickerFooter = <p className="text-xs text-neutral-400">{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      const days = differenceInDays(range.to, range.from) + 1;
      datePickerFooter = (
        <p className="text-xs text-green-400">
          {days} day(s) selected: {format(range.from, "PPP")} – {format(range.to, "PPP")}
        </p>
      );
    }
  }

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505] text-white">
        <p className="font-serif italic text-2xl">
          The archive could not locate this piece.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-20">
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:pt-40">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* --- LEFT: CINEMATIC IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="sticky top-40 space-y-4">
              <div className="relative group aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Thumbnail strip (Static Placeholder) */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer hover:border-amber-500/50 transition-colors"
                  >
                    <img
                      src={product.image}
                      className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: PRODUCT ARCHIVE DETAILS --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                <StarIcon className="w-3 h-3 fill-amber-500" />
                <span>{product.rating} Rating • Rare Archive</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-neutral-400 text-lg font-light leading-relaxed italic">
                {product.description}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1">
                    Rental Rate
                  </p>
                  <p className="text-4xl font-serif text-white">
                    ₹{product.pricePerDay}
                    <span className="text-sm text-neutral-500">/day</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1">
                    Security Deposit
                  </p>
                  <p className="text-xl font-serif text-amber-200">
                    ₹{product.securityDeposit}
                  </p>
                </div>
              </div>

              {/* --- DATE PICKER INTEGRATION --- */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500/80 flex items-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5" />
                  Select Rental Period
                </h3>
                <div className="flex justify-center bg-black/20 rounded-2xl">
                  <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={setRange}
                    footer={<div className="text-center pt-2 pb-2">{datePickerFooter}</div>}
                    disabled={{ before: new Date() }}
                    styles={{
                      root: { border: 'none', color: '#f5f5f5', width: '100%' },
                      caption: { color: '#f59e0b' },
                      day: { color: '#a3a3a3' },
                      day_selected: { backgroundColor: '#f59e0b', color: 'black' },
                      day_range_middle: { backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#f5f5f5' },
                      head: { color: '#f59e0b' },
                    }}
                  />
                </div>
              </div>

              <Button
                className="w-full py-6 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-[0.3em] text-[11px] rounded-full transition-all group disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={handleBooking}
                disabled={!range?.from || !range?.to}
              >
                <span className="flex items-center justify-center gap-3">
                  <ShoppingBagIcon className="w-4 h-4" />
                  Confirm Booking
                </span>
              </Button>
              <p className="text-center text-[9px] text-neutral-500 uppercase tracking-widest">
                Tax calculated at checkout • Fully Insured
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 gap-6 pt-6">
              {[
                {
                  icon: ShieldCheckIcon,
                  label: "Authenticity",
                  desc: "Certified 22k Gold & Lab-Tested Polki",
                },
                {
                  icon: TruckIcon,
                  label: "Concierge Delivery",
                  desc: "White-glove delivery in climate-controlled cases",
                },
                {
                  icon: ArrowPathIcon,
                  label: "Hassle-Free Returns",
                  desc: "Reverse pickup scheduled at your doorstep",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
                >
                  <item.icon className="w-6 h-6 text-amber-500/60 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                      {item.label}
                    </h4>
                    <p className="text-sm text-neutral-500 font-light mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;