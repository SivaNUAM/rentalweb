import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, rentalDays = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, rentalDays: item.rentalDays + rentalDays }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          rentalDays,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateRentalDays = (id, days) => {
    if (days < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rentalDays: days } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalRentalPrice = cartItems.reduce(
    (total, item) => total + item.pricePerDay * item.rentalDays,
    0
  );

  const totalDeposit = cartItems.reduce(
    (total, item) => total + item.securityDeposit,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateRentalDays,
        clearCart,
        totalRentalPrice,
        totalDeposit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
