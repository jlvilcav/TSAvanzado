import {faker} from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent()
    }
  });
}

console.log(products);


