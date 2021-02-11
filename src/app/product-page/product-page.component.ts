import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public product$: Observable<IProduct>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map(params => params.get('id')))
      .subscribe(id => {
        this.loadProduct(+id);
      });
  }

  private loadProduct(id: number): void {
    this.product$ = this.apiService.getProduct(id);
  }

}
