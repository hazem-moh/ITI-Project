import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart ,CartItem} from '../cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:4200/cart';

  constructor(private http: HttpClient) { }

  // استرجاع سلة المشتريات
  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.apiUrl);
  }

  // إضافة عنصر إلى سلة المشتريات
  addToCart(item: CartItem): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, item);
  }

  // تحديث كمية عنصر في سلة المشتريات
  updateCart(item: CartItem): Observable<Cart> {
    return this.http.put<Cart>(this.apiUrl, item);
  }

  // حذف عنصر من سلة المشتريات
  removeFromCart(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}

