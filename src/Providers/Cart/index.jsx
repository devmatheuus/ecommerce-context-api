import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const initialState = JSON.parse(localStorage.getItem('@cart/items')) || [];

export const CartContext = createContext([]);

export const CartProviders = ({ children }) => {
  const [itemsOnCart, setItemsOnCart] = useState(initialState);

  const addToCart = product => {
    const list = JSON.parse(localStorage.getItem('@cart/items')) || [];
    list.push(product);

    localStorage.setItem('@cart/items', JSON.stringify(list));

    setItemsOnCart([...itemsOnCart, product]);
  };

  const removeFromCart = id => {
    try {
      const newItemsOnCart = itemsOnCart.filter(product => product.id !== id);

      localStorage.setItem('@cart/items', JSON.stringify(newItemsOnCart));

      setItemsOnCart(newItemsOnCart);

      toast.success('Item removido');
    } catch {
      toast.error('Houve um erro');
    }
  };

  return (
    <CartContext.Provider value={{ itemsOnCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
