import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // تأكد من استيراد FormsModule هنا

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // من هنا يمكنك إضافة الكود للتحقق من صحة بيانات الدخول
    if (this.email === 'user@example.com' && this.password === 'password') {
      // عملية تسجيل دخول ناجحة
      this.router.navigate(['/dashboard']);
    } else {
      // عملية تسجيل دخول فاشلة
      alert('Invalid credentials');
    }
  }
}