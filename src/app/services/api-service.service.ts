import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  restUrl: string = environment.baseUrl
  constructor(private http:HttpClient) { }

  get(url){
    return this.http.get(this.restUrl + url)
  }

  post(body){
    return this.http.post(this.restUrl + body.url, body.params)
  }

}