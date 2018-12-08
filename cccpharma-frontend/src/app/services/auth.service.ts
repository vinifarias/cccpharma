import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TYPE = "TYPE";
  ADMIN = 'ADMIN';

  url: string;

  constructor(
    private router: Router,
    private http: HttpClient) 
  { 
    this.url = environment.API + '/login';
  }

  login(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(this.url);

    const request = this.http.post(this.url, body ,httpOptions);

    request.subscribe( res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });;



    // console.log(body);
    // localStorage.setItem(this.TYPE, this.ADMIN);
    // this.router.navigate(['/home']);
  }


  isLogged() {
    const type = localStorage.getItem(this.TYPE);
    if (type === this.ADMIN) {
      return true;
    } else {
      return false;
    }
  }
}
