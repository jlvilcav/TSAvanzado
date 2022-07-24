import { Product} from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = products.length + 1;
  // data.createdAt = new Date(1988,1,1);
  products.push(data);
}

export const updateProduct = (id: string, changes: Product) => {
  // data.id = products.length + 1;
  // data.createdAt = new Date(1988,1,1);
  //products.push(data);
}

export const getProduct = (id: string) => {
  // data.id = products.length + 1;
  // data.createdAt = new Date(1988,1,1);
  // products.push(data);
}

export const deleteProduct = (id: string) => {
  // data.id = products.length + 1;
  // data.createdAt = new Date(1988,1,1);
  // products.push(data);
}
