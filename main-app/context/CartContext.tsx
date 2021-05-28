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

  const handleRemoveCartItems = (cartItem: CartItem) => {
    setCartDetails(cartDetails.filter((item) => item.key !== cartItem.key));
  };

  const handleRemoveAllItems = () => {
    setCartDetails([]);
  };
  const totalAmount = useMemo(() => {
    return cartDetails.reduce((result, item) => result + item.amount, 0);
  }, [cartDetails]);

  const totalPrice = useMemo(() => {
    return cartDetails.reduce((result, item) => result + item.amount * item.price, 0);
  }, [cartDetails]);
  return (
    <CartContext.Provider
      value={{
        cartDetails,
        totalAmount,
        totalPrice,
        addToCart: handleAddToCartClick,
        removeCartItems: handleRemoveCartItems,
        removeAll: handleRemoveAllItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
