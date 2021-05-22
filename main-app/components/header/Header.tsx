import React, { FC, useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ShoppingCart from '../shoppingcart/ShoppingCart';

type HeaderProps = {};
const Header: FC<HeaderProps> = (props) => {
  const { totalAmount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="bg-background-header h-8 px-8 flex items-center text-right">
      <div className="w-full text-fontColor-light text-sm font-light cursor-pointer">
        <button className="" onClick={handleCartToggle}>
          My Cart {!!totalAmount && totalAmount}
        </button>
      </div>
      {isCartOpen && (
        <div className="py-8">
          <ShoppingCart />
        </div>
      )}
    </div>
  );
};

export default Header;
