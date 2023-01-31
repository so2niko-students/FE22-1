import { createContext, useState } from "react";

export const CartContext = createContext(null);

const baseCart = {
  count : 0,
  price : 0,
  weight : 0,
  total : []
};

export function MyContext({ children }) {
  const [cart, setCart] = useState(baseCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
