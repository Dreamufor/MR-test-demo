import React, { FC, useContext } from 'react';
import { ProductContext } from '../../pages';

type ProductDetailProps = {};

const ProductDetail: FC<ProductDetailProps> = (props) => {
  const { addToCart } = useContext(ProductContext);
  return (
    <div className="text-red-700">
      <button onClick={() => addToCart('test item')}>Add To Cart</button>
    </div>
  );
};

export default ProductDetail;
