import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';  // يمكنك تخصيص هذا الرابط
  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getProductsByCategory(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?category=${categoryId}`);
}
}