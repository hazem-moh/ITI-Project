import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // تأكد من استيراد FormsModule هنا

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // هنا يمكن إضافة الكود لحفظ بيانات المستخدم الجديدة
    alert('Registration successful');
    this.router.navigate(['/login']);
  }
}