import { Category} from './../category/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL'; //lotral type

export interface Product {
  id: string | number;
  title: string
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
  category: Category;
}
