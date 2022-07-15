import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginapiService } from '../shared/loginapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  login_res: any;
  constructor(
    private services: LoginapiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {

    const credential = { 'username': 'saabir', 'password': '123456' };
    this.login_res = this.services.login(credential);
    if ((localStorage.getItem('jwt'))) {
      this.router.navigateByUrl('/home');
    }
    else {
      alert('Invalid username and password.');
    }
  }
}
