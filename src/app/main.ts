import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct, findProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    // id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    // createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 0, max: 100 }),
    categoryId: faker.datatype.uuid()
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updateAt: faker.date.recent()
    // }
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 50//,
  // createdAt: new Date(),
  // id: '123'
});

findProduct({
  stock: 50,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['tag1', 'tag2']
});


