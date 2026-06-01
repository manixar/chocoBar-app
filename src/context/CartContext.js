"use client";
import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //MOHASEBE TEDAD KOLLE SABAD KHARID
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  }, [cartItems]);
  //EZAFE BE SABAD KHARID
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // اگر محصول موجود بود، تعداد را زیاد کن
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // اگر محصول جدید بود، با تعداد 1 اضافه کن
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  //KAM KARDAN AZ SABADE KHARID
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity === 1) {
        // اگر تعداد 1 بود، محصول را حذف کن
        return prevItems.filter((item) => item.id !== productId);
      } else {
        // اگر تعداد بیشتر بود، یکی کم کن
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  //TEDADE YE MAHSOOLE KHAS
  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  //HAZFE KAMELE MAHSOL AZ SABAD KHARID
  const deleteFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  //KHALI KARDANE SABAD KHARID
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        getProductQuantity,
        deleteFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//CUSTOM HOOK USEFULL BARAYE ESTEFADE RAHAT
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
