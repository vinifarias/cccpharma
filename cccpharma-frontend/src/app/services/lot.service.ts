import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

declare const M;

@Injectable({
  providedIn: 'root'
})
export class LotService {

  url: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.url = environment.API + '/lots';
  }

  getLots() {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token
      })
    };
    const request = this.http.get(this.url, httpOptions);

    return request;
  }

  registerLot(body: any) {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token
      })
    };

    console.log(body);
    console.log(httpOptions);

    const request = this.http.post(this.url, body, httpOptions);

    return request;
  }
}
