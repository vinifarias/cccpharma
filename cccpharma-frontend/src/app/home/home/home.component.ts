import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare const M;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  	private authService: AuthService, 
  	private router: Router) { }

  ngOnInit() {
  	if (!this.authService.isLogged()) {
  		 M.toast({html: 'Usuário não atenticado'})
  		 this.router.navigate(['/']);
  	}
  }

}
