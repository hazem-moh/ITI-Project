import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  email: string = '';
  country: string = '';
  phoneNumber: string = '';
  password: string = '';
  repeatedPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Register function
  onRegister() {
    if (this.password === this.repeatedPassword) {
      const registrationData = {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        country: this.country,
        phoneNumber: this.phoneNumber,
        password: this.password,
      };

      this.authService.register(registrationData).subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          // After registration, you may want to store the token
          const token = response.token;
          this.authService.storeToken(token);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed', err);
        },
      });
    } else {
      console.error('Passwords do not match');
    }
  }
}