import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../../data';

const ShoppingCart = () => {
  const { cartDetails } = useContext(CartContext);
  console.log('cartDetails', cartDetails);
  return (
    <div className="bg-white w-64 border border-gray-300 flex flex-col p-8 gap-y-4">
      {cartDetails?.length === 0 ? (
        <div className="flex text-sm justify-center items-center font-light">Your cart is empty</div>
      ) : (
        cartDetails.map((cartItem: CartItem) => {
          const { key, name, price, size, amount, image } = cartItem;
          return (
            <div key={key} className="flex">
              <div className="w-16">
                <img className="w-full h-full" src={image} alt="" />
              </div>
              <div className="flex flex-col gap-y-2 text-left">
                <div className="text-fontColor-dark font-light text-xs">{name}</div>
                <div className="text-fontColor-dark font-light text-xs">
                  {amount} x <span className="font-medium">${price}</span>
                </div>
                <div className="text-fontColor-dark font-light text-xs">Size: {size}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ShoppingCart;
