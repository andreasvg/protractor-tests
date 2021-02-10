import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products$ = this.apiService.getProducts();
  public selectedProduct: IProduct;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  public onClick(product: IProduct): void {
    this.selectedProduct = product;
  }
}
