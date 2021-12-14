import { Injectable } from '@angular/core';
import { Product } from './components/product/prduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return[
      new Product(1,"Fried Chicken",100,20,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg"),
      new Product(2,"Nugget",300,20,"https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg"),
      new Product(3,"Mashed Potato",500,20,"https://images.pexels.com/photos/7543200/pexels-photo-7543200.jpeg"),
      new Product(4,"Egg Tart",1000,20,"https://images.pexels.com/photos/6133403/pexels-photo-6133403.jpeg"),
      new Product(5,"Chicken Burger",5000,0,"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"),
    ];
  }
}
