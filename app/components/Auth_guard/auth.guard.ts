import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  console.log(token);

  if (token) {
    return true;  // allow access
  } else {
    router.navigate(['/']);   // redirect to login
    return false;
  }

};
