import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  fontSizeWithUnits = '30px';
  fontSizeWithoutUnits = '30';
  // getClasses(): string {
  //   return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  // }

  getClasses(key: number): string {
    const product = this.model.getProduct(key);
    return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): Object {

    const product = this.model.getProduct(key);

    return {
      'text-xs-center bg-danger': product.name === 'Kayak',
      'bg-info': product.price < 50
    };
  }

  getStyleMap(key: number) {

    const product = this.model.getProduct(key);

    return {
      fontSize: '30px',
      'margin.px': 100,
      color: product.price > 50 ? 'red' : 'green'
    };
  }
}
