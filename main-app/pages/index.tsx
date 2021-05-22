import React, { createContext, FC } from 'react';
import Header from '../components/header/Header';
import ProductDetail from '../components/product/ProductDetail';
import PageLayout from '../containers/layout/PageLayout';
import { CartProvider } from '../context/CartContext';
import { CartItem } from '../data';

const App: FC = (props) => {
  return (
    <CartProvider>
      <PageLayout>
        <div className="w-full xl:w-4/5 flex flex-col justify-center items-center">
          <Header />
          <ProductDetail />
        </div>
      </PageLayout>
    </CartProvider>
  );
};

export default App;
