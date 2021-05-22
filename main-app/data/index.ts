const ProductImage = 'image/classic-tee.jpg';

export enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
}

export type Product = {
  id: string;
  product_name: string;
  price: number;
  product_description?: string;
  sizes: Size[];
  imgSrc: string;
};
const mockProduct: Product = {
  id: '000002222222',
  product_name: 'Classic Tee',
  price: 75,
  product_description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  sizes: [Size.S, Size.M, Size.L],
  imgSrc: ProductImage,
};

export const getProductQuery: Promise<Product> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockProduct);
  }, 1000);
});
