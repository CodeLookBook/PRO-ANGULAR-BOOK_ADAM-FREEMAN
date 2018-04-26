import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  getClasses(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }
}