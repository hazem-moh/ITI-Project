import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [RouterModule, CommonModule, FormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // loginForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private authService: AuthService,
  //   private router: Router
  // ) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: (response: any) => {
  //         const token = response.token;
  //         this.authService.storeToken(token);
  //         this.router.navigate(['/protected']);
  //       },
  //       error: (err) => {
  //         console.error('Login failed', err);
  //       },
  //     });
  //   }
  // }
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService
        .login({ email: this.email, password: this.password })
        .subscribe({
          next: (response: any) => {
            const token = response.token; 
            this.authService.storeToken(token); 
            this.router.navigate(['/protected']); 
          },
          error: (err) => {
            console.error('Login failed', err);
          },
        });
    }
  }
}
