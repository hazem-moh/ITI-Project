import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service'; 

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if (token) {
    // If the token exists, allow access
    return true;
  } else {
    // If no token, redirect to the login page
    router.navigate(['/login']);
    return false;
  }
};
