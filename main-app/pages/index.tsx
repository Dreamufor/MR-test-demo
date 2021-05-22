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
        <Header />
        <div className="px-16">
          <ProductDetail />
        </div>
      </PageLayout>
    </CartProvider>
  );
};

export default App;
