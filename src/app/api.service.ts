import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndpoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
              }

  public getProducts(): Observable<IProduct[]> {
    const url = `${this.apiEndpoint}/products`;
    return this.http.get<IProduct[]>(url);
  }

}
