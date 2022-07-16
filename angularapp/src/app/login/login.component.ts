import { HttpClient } from '@angular/common/http';
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
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  login() {
    const credential = { 'username': 'saabir', 'password': '123456' };
    this.http.post("http://localhost:25104/api/auth/login", credential).subscribe(res => {
      //console.log((<any>res).token);
      localStorage.setItem('jwt', (<any>res).token);
      this.router.navigateByUrl('/home');
    }), (error: any) => {
      alert('error');
    }
  }

  login1() {

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
