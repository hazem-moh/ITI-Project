// 

//=====================================================================================================
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../Service/auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: '',
    require: true
  };

  userLogin: any = {
    userName: '',
    password: '',
    require: true
  };

  router = inject(Router);
  //authService = inject(AuthService);

  validateForm(fields: any): boolean {
    let isValid = true;
    for (const field in fields) {
      if (!fields[field]) {
        isValid = false;
      }
    }
    return isValid;
  }
  
  onRegister() {
    // Validate registration form
    if (!this.validateForm(this.userRegisterObj)) {
      alert("Please fill out all fields.");
      return;
    }
  
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert("Registration Success");
  
    // Simulate email verification
    // this.sendEmailVerification(this.userRegisterObj.emailId);
  }
  
  onLogin() {
    // Validate login form
    if (!this.validateForm(this.userLogin)) {
      alert("Please fill out all fields.");
      return;
    }
  
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);
  
      const isUserFound = users.find((m: any) => m.userName === this.userLogin.userName && m.password === this.userLogin.password);
      if (isUserFound != undefined) {
        this.router.navigateByUrl('home');
      } else {
        alert("Username or password is incorrect.");
      }
    } else {
      alert("No User Found");
    }
  }
  
  
  // sendEmailVerification(email: string) {
  //   console.log(Verification email sent to ${email});
  //   alert(Verification email sent to ${email});
  // }
};