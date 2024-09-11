import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Backend URL

  constructor(private http: HttpClient) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/login`, credentials); // Sending login request
  }

  // Register method
  register(user: {
    email: string;
    password: string;
    repeatedPassword: string;
    firstName: string;
    lastName: string;
    userName: string;
    country: string;
    phoneNumber: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user); // Sending signup request
  }
}
