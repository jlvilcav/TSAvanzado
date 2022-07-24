import { addProduct } from './products/product.service';

addProduct({
  id: '123',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 10,
  category: {
    id: '123',
    name: 'Category 1'
  }
});