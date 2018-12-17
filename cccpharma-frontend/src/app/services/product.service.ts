import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

declare const M;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.url = environment.API + '/products';
  }

  getAllProject() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    console.log(this.url);

    const request = this.http.get(this.url, httpOptions);

    return request;

  }

  registerProduct(body: any) {
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

  getAvailableQuantityByProductId(product: any) {
    const productId = product.barcode;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    console.log(this.url);

    const request = this.http.get(this.url + '/' + productId + '/availableQuantity', httpOptions);

    return request;

  }
  
    findProductByName(name: any) {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token
      })
    };
    
    const newURL = this.url + '/name/contains/' + name;
    console.log(newURL)
    const request = this.http.get(newURL, httpOptions);

    return request;
    
  }


  availableQuantityProduct(id: string) {
    const token = this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token
      })
    };
    const newUrl = this.url + '/' + id + '/availableQuantity';
    const request = this.http.get(newUrl + '', httpOptions);
    return request;
  }
}
