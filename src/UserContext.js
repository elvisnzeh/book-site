import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const Provider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [modals, SetModals] = useState(false);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
    setTotalPrice(totalPrice + book.price);
    
  };

  return (
    <PageContext.Provider value={{ cart, totalPrice, handleAddToCart,modals,SetModals,setCart ,setTotalPrice,}}>
      {props.children}
    </PageContext.Provider>
  );
};

export default Provider;
