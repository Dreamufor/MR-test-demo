import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ShoppingCart = () => {
  const { cartDetails } = useContext(CartContext);
  console.log('cartDetails', cartDetails);
  return <div className="bg-white w-64 h-96 border border-gray-300"></div>;
};

export default ShoppingCart;
