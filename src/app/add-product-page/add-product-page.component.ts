import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public addProduct(): void {
    this.apiService.addProduct({
      id: 999,
      manufacturer: 'Gibson',
      name: 'Firebird',
      price: 2000,
      productType: 'Guitar',
      imageIds: []
    });

    this.router.navigate(['/']);
  }

}
