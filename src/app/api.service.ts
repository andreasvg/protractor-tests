import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { IProduct } from './models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // product list coming from the API:
  private apiEndpoint: string = 'http://localhost:8080';
  public products$ = this.http.get<IProduct[]>(`${this.apiEndpoint}/products`);

  // list of products added by the user:
  private addedProducts: IProduct[] = [];
  private addedProductsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  public addedProducts$ = this.addedProductsSubject.asObservable();

  // combined observable of all products:
  public allProducts$ = combineLatest([
      this.products$, this.addedProducts$
    ])
    .pipe(
        map( ([products, addedProducts]) => {
          return products.concat(addedProducts);
        })
    );

  constructor(private http: HttpClient) {}

  public getProduct(productId: number): Observable<IProduct> {
    const url = `${this.apiEndpoint}/products/${productId}`;
    return this.http.get<IProduct>(url);
  }

  public addProduct(product: IProduct): void {
    this.addedProducts.push(product);
    this.addedProductsSubject.next(this.addedProducts);
  }

}
