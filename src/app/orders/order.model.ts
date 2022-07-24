import { baseModel} from './../base.model';
import { Product} from './../products/product.model';
import { User } from './../users/user.model';

interface Order extends baseModel{
  products: Product[];
  user: User;
}
