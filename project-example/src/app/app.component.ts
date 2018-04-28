import { Component, ApplicationRef } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  targetName: string = 'Kayak';

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model  = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {

    const product = this.getProductByPosition(position);

    return 'p-a-1 ' +
      (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }
}
