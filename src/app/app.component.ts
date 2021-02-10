import { Component } from '@angular/core';
import { IProduct } from './models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedProduct: IProduct;
  title = 'Protractor Tests';

}
