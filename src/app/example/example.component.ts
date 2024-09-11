import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getProtectedData() {
    const headers = this.authService.getAuthHeaders();
    this.http
      .get('http://localhost:3000/protected-route', { headers }) 
      .subscribe({
        next: (data) => {
          console.log('Protected data:', data);
        },
        error: (err) => {
          console.error('Error fetching protected data:', err);
        },
      });
  }
}
