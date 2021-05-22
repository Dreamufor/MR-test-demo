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
    <div className="w-full bg-background-header h-8 px-16 flex items-center text-right relative z-30">
      {isCartOpen && (
        <div className="absolute top-8 right-16">
          <ShoppingCart />
        </div>
      )}
      <div className="w-full text-fontColor-light cursor-pointer">
        <div className="border-0 font-light text-xs" onClick={handleCartToggle}>
          My Cart {!!totalAmount && <span>{'( ' + totalAmount + ' )'}</span>}
        </div>
      </div>
    </div>
  );
};

export default Header;
