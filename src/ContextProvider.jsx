import { createContext, useState } from 'react';

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (event, data) => {
    event.preventDefault();
    event.stopPropagation();
    setCart([...cart , data])
  }

  return (
    <MainContext.Provider value= {{ cart, setCart, addToCart }}>
      {children}
    </MainContext.Provider>
  );
};
