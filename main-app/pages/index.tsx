import React, { FC } from 'react';
import Header from '../components/header/Header';
import ProductDetail from '../components/product/ProductDetail';
import PageLayout from '../containers/layout/PageLayout';

const App: FC = (props) => {
  return (
    <PageLayout>
      <Header />
      <ProductDetail />
    </PageLayout>
  );
};

export default App;
