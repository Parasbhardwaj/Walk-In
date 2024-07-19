import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() { }

  // Save tokens as cookies
  saveTokens(tokens: { accessToken: string; refreshToken: string }): void {
    this.setCookie('accessToken', tokens.accessToken, 7); // Save for 7 days
    this.setCookie('refreshToken', tokens.refreshToken, 7); // Save for 7 days
  }

  // Remove tokens from cookies
  removeTokens(): void {
    this.deleteCookie('accessToken');
    this.deleteCookie('refreshToken');
  }

  // Get a specific token from cookies
  getToken(tokenName: string): string | null {
    return this.getCookie(tokenName);
  }

  // Check if a token is saved in cookies
  isTokenSaved(tokenName: string): boolean {
    return this.getCookie(tokenName) !== null;
  }

  // Utility methods to set, get, and delete cookies
  private setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;Secure;SameSite=Strict`;
    console.log(document.cookie);
  }

  private getCookie(name: string): string | null {
    const nameEQ = name + "=";

    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }

  private deleteCookie(name: string): void {
    document.cookie = `${name}=; Max-Age=0; path=/; Secure; SameSite=Strict`;
  }
}
