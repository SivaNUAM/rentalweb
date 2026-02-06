import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, differenceInDays } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const DateSelectionModal = ({ isOpen, onClose, onConfirm, productName }) => {
  const [range, setRange] = useState();

  const handleConfirm = () => {
    if (range?.from && range?.to) {
      const rentalDays = differenceInDays(range.to, range.from) + 1;
      onConfirm(rentalDays);
      onClose();
    }
  };

  let footer = <p className="text-sm text-neutral-500">Please select the first and last day of your rental period.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p className="text-sm text-neutral-400">{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      const days = differenceInDays(range.to, range.from) + 1;
      footer = (
        <p className="text-sm text-neutral-300">
          Selected {days} day(s) from {format(range.from, "PPP")} to {format(range.to, "PPP")}.
        </p>
      );
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-[#121212] border border-white/10 rounded-3xl shadow-2xl w-full max-w-lg text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div>
                <h2 className="text-xl font-serif flex items-center gap-3">
                  <CalendarDaysIcon className="w-6 h-6 text-amber-500/70" />
                  Select Rental Dates
                </h2>
                <p className="text-xs text-neutral-400 mt-1">For: <span className="font-bold text-white">{productName}</span></p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Calendar */}
            <div className="p-6 flex justify-center">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                footer={<div className="text-center pt-4">{footer}</div>}
                disabled={{ before: new Date() }}
                styles={{
                  root: { 
                    border: 'none',
                    color: '#f5f5f5',
                  },
                  caption: { color: '#f59e0b' },
                  day: { color: '#a3a3a3' },
                  day_selected: { 
                    backgroundColor: '#f59e0b !important', 
                    color: 'black',
                  },
                  day_range_middle: {
                    backgroundColor: 'rgba(245, 158, 11, 0.2) !important',
                    color: '#f5f5f5',
                  },
                  head: { color: '#f59e0b' },
                }}
              />
            </div>

            {/* Footer Actions */}
            <div className="p-6 bg-white/[0.02] border-t border-white/10 rounded-b-3xl flex justify-end">
              <button
                onClick={handleConfirm}
                disabled={!range?.from || !range?.to}
                className="bg-amber-500 text-black font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-400 transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DateSelectionModal;
