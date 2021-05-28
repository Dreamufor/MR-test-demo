import React, { FC, useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ShoppingCart from '../shoppingcart/ShoppingCart';

type HeaderProps = {};
const Header: FC<HeaderProps> = () => {
  const { totalAmount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="w-full bg-background-header h-8 px-16 flex items-center text-right relative z-30">
      {isCartOpen && (
        <div className="absolute top-8 right-16" style={{ marginTop: '-1px' }}>
          <ShoppingCart />
        </div>
      )}
      <div
        className={`absolute right-16 top-0 text-fontColor-light cursor-pointer h-8 w-24 ${
          isCartOpen ? 'border border-gray-300 bg-white' : 'border-0'
        }`}
        style={{
          borderBottomColor: 'white',
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center font-light text-xs whitespace-nowrap"
          onClick={handleCartToggle}
        >
          My Cart {!!totalAmount && <span>{'( ' + totalAmount + ' )'}</span>}
        </div>
      </div>
    </div>
  );
};

export default Header;
