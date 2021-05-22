import React, { createContext, useMemo, useState } from 'react';
import { CartItem } from '../data';

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cartDetails, setCartDetails] = useState<CartItem[]>([]);

  const handleAddToCartClick = (cartItem: CartItem) => {
    setCartDetails((preCartDetails) => {
      const hasItem = preCartDetails.some((itemInCart) => itemInCart.key === cartItem.key);
      if (hasItem) {
        return preCartDetails.map((itemInCart) =>
          itemInCart.key === cartItem.key ? { ...itemInCart, amount: itemInCart.amount + cartItem.amount } : itemInCart
        );
      }

      return [...preCartDetails, cartItem];
    });
  };
  const totalAmount = useMemo(() => {
    return cartDetails.reduce((result, item) => result + item.amount, 0);
  }, [cartDetails]);
  return (
    <CartContext.Provider
      value={{
        cartDetails,
        totalAmount,
        addToCart: handleAddToCartClick,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
