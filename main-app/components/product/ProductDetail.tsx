import React, { FC, useContext, useEffect, useState } from 'react';

import { getProductQuery, Product, Size } from '../../data/index';
import { CartContext } from '../../context/CartContext';

type ProductDetailProps = {};

const convertProductToCartItem = (product: Product, selectedSize: Size) => {
  return {
    key: product.id + selectedSize,
    id: product.id,
    price: product.price,
    name: product.product_name,
    size: selectedSize,
    image: product.imgSrc,
    amount: 1,
  };
};

const ProductDetail: FC<ProductDetailProps> = (props) => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product>(null);
  const handleAddToCart = () => {
    addToCart(convertProductToCartItem(product, selectedSize));
  };
  const [selectedSize, setSelectedSize] = useState<Size>(null);

  const handleSelectSize = (size: Size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    getProductQuery.then((item) => {
      setProduct(item);
    });
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <div className="flex gap-x-4 py-8 -mx-4">
          <div className="w-1/2 flex justify-center">
            <div className="w-96">
              <img src={product.imgSrc} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="w-1/2  text-fontColor-light">
            <div className="text-fontColor-dark text-2xl font-light">{product.product_name}</div>
            <div className="py-4">
              <div className="z-0 border-t border-border-lightGray opacity-20" />
              <div className="text-fontColor-dark text-sm font-medium py-2">${product.price.toFixed(2)}</div>
              <div className="z-0 border-t border-border-lightGray opacity-20" />
            </div>

            <div className="text-xs font-light">{product.product_description}</div>
            <div className="pt-6">
              <div className="text-xs pt-2">
                SIZE <span className="text-required-star pr-2">*</span>
                <span className="text-fontColor-dark">{selectedSize}</span>
              </div>
              <div className="flex gap-x-4 text-xs py-4">
                {product.sizes.map((size) => {
                  return (
                    <div
                      key={size}
                      className={`w-10 h-10 p-2 flex items-center justify-center cursor-pointer ${
                        selectedSize === size
                          ? 'border-border-darkGray border-2 text-fontColor-dark'
                          : 'border-border-lightGray border text-fontColor-light'
                      }`}
                      onClick={() => handleSelectSize(size)}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              disabled={!selectedSize}
              className="border-2 border-border-darkGray px-4 py-2 text-fontColor-dark text-sm font-medium"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
