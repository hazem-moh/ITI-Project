import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  repeatedPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  country: string = '';
  phoneNumber: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  // Handles login form submission
  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        alert('Login successful');
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed, please try again.');
      }
    );
  }

  // Handles signup form submission
  onRegister() {
    if (this.password !== this.repeatedPassword) {
      alert("Passwords don't match!");
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
      repeatedPassword: this.repeatedPassword,
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      country: this.country,
      phoneNumber: this.phoneNumber,
    };

    this.authService.register(user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful');
      },
      (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed, please try again.');
      }
    );
  }

  showSignupForm(event: Event) {
    event.preventDefault();
    // Logic to toggle form visibility
  }
}