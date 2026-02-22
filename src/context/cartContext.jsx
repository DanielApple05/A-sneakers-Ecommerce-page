import { useState, useContext, createContext } from "react";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);
export const CartProvider = ({ children }) =>{
  const [ cartItems, setCartItems] = useState([]);
  const addToCart = (product) => { 
    setCartItems((prev) => [...prev, product]);
  }
  return (
    <cartContext.Provider value = {{cartItems, addToCart}}>
      { children }
    </cartContext.Provider>
  )
}