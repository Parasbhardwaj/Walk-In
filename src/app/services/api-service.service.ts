import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookieServiceService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  restUrl: string = environment.baseUrl
  // accessToken = getTokens('accessToken');

  constructor(private http: HttpClient,private cookie:CookieServiceService) { }

  login(body) {
    return this.http.post(this.restUrl + body.url, body.params)
  }

  get(url) {
    // console.log(this.accessToken);
    // const accessToken = this.getCookie("accessToken");
    const accessToken = this.cookie.getToken("accessToken");
    console.log(accessToken);
    console.log(typeof accessToken);
    
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    })
    console.log(headers);
    
    return this.http.get(this.restUrl + url, { headers })
  }

  // private getCookie(name: string): string | null {
  //   const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  //   return match ? decodeURIComponent(match[2]) : null;
  // }

  post(body) {
    return this.http.post(this.restUrl + body.url, body.params)
  }

}
