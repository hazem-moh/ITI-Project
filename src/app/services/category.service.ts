import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/category/all'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Method to fetch all categories
  getCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
