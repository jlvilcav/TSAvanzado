import { baseModel} from './../base.model';
import { Category} from './../category/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL'; //lotral type

export interface Product extends baseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}


