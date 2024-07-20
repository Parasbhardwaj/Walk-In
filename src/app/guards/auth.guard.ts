import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieServiceService } from '../services/cookie-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieServiceService)
  const router = inject(Router)

  if (cookie.getToken('accessToken')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return true;
};
