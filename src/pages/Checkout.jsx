import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useCart from "../hooks/useCart";
import CartSummary from "../components/cart/CartSummary";
import OrderSuccess from "../components/cart/OrderSuccess";

const Checkout = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { cartItems, clearCart } = useCart();

  const handlePlaceOrder = () => {
    // In a real app, you'd process payment here
    setIsOrderPlaced(true);
    clearCart();
  };

  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="py-40 text-center text-neutral-500">
        <h1 className="text-2xl font-serif">Your cart is empty.</h1>
        <p className="mt-2 text-sm">Cannot proceed to checkout.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-20 px-4">
      <AnimatePresence mode="wait">
        {isOrderPlaced ? (
          <OrderSuccess key="success" />
        ) : (
          <div key="checkout" className="w-full max-w-md">
            <h1 className="text-4xl font-serif text-center mb-12">
              Finalize Your Archive
            </h1>
            <CartSummary />
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 h-14 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-500"
            >
              Confirm & Reserve
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;
