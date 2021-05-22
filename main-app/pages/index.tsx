import React, { createContext, FC } from 'react';
import Header from '../components/header/Header';
import ProductDetail from '../components/product/ProductDetail';
import PageLayout from '../containers/layout/PageLayout';

export const ProductContext = createContext(null);
const App: FC = (props) => {
  const cartDetails = [];

  const handleAddToCartClick = (item) => {
    console.log(item, 'item');
  };
  return (
    <ProductContext.Provider
      value={{
        cartDetails,
        addToCart: handleAddToCartClick,
      }}
    >
      <PageLayout>
        <Header />
        <div className="px-16">
          <ProductDetail />
        </div>
      </PageLayout>
    </ProductContext.Provider>
  );
};

export default App;
