type Sizes = 'S' | 'M' | 'L' | 'XL'; //lotral type

// type Product = {
//   id: string | number;
//   title: string
//   createdAt: Date;
//   stock: number;
//   sizes?: Sizes;
// }

interface Product {
  id: string | number;
  title: string
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '123',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 10
});

const addProduct = (data: Product) => {
  products.push(data);
}
