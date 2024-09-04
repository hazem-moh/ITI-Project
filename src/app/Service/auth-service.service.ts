// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = 'http://localhost:3000'; // Your backend API URL

//   constructor(private http: HttpClient) {}

//   register(user: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }

//   sendVerificationEmail(email: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/send-verification-email`, { email });
//   }
// }
