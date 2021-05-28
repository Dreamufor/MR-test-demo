import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../../data';

const ShoppingCart = () => {
  const { cartDetails, totalPrice, removeCartItems, removeAll } = useContext(CartContext);
  return (
    <div className="bg-white w-72 border border-gray-300 flex flex-col p-8">
      {cartDetails?.length === 0 ? (
        <div className="flex text-sm justify-center items-center font-light">Your cart is empty</div>
      ) : (
        <div className="flex flex-col gap-y-4 w-full">
          {cartDetails.map((cartItem: CartItem) => {
            const { key, name, price, size, amount, image } = cartItem;
            return (
              <div key={key} className="flex">
                <div className="w-20">
                  <img className="w-full h-full" src={image} alt="" />
                </div>
                <div className="flex flex-col gap-y-2 text-left">
                  <div className="text-fontColor-dark font-light text-xs">{name}</div>
                  <div className="text-fontColor-dark font-light text-xs">
                    {amount} x <span className="font-medium">${price}</span>
                  </div>
                  <div className="text-fontColor-dark font-light text-xs">Size: {size}</div>

                  <div
                    className="cursor-pointer text-xs text-center font-light text-red-400 border border-red-400 rounded px-1"
                    onClick={() => removeCartItems(cartItem)}
                  >
                    REMOVE
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center text-sm">
            <div
              className="text-center cursor-pointer font-light bg-red-500 text-white rounded px-1"
              onClick={removeAll}
            >
              CLEAR ALL
            </div>
            <div>
              Total Price : <span className="font-bold">${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
