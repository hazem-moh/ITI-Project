// src/app/services/cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:3000/api/cart';

  constructor(private http: HttpClient) {}

  // الحصول على جميع العناصر في العربة
  getCartItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // إضافة عنصر جديد إلى العربة
  addToCart(cartItem: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, cartItem);
  }

  // تحديث عنصر في العربة
  updateCartItem(id: string, cartItem: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cartItem);
  }

  // حذف عنصر من العربة
  deleteCartItem(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
