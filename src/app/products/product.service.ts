import { Product} from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];

  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index];
}

export const findProduct = (dto: FindProductDto): Product[] => {
  //code
  // dto.color = 'red'; //Son campos de lectura
  // dto.tags = ['tag1', 'tag2']; //Son campos de lectura
  // dto.tags?.push(); //Son campos de lectura
  // dto.tags?.pop(); //Son campos de lectura
  // dto.tags = []; //Son campos de lectura
  return products;
}

export const deleteProduct = (id: string) => {
  // data.id = products.length + 1;
  // data.createdAt = new Date(1988,1,1);
  // products.push(data);
}
