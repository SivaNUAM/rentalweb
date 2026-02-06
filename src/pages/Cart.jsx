import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-20 text-center text-neutral-600">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CartSummary />
    </div>
  );
};

export default Cart;
