import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginapiService {
  
  constructor(private http: HttpClient) { }

  login(val: any) {
    
    this.http.post("http://localhost:25104/api/auth/login", val).subscribe(res => {      
      //console.log((<any>res).token);
      localStorage.setItem('jwt',(<any>res).token);
    });  
  }
  async getData() {
    let headers = new HttpHeaders();
    headers = headers.set('authorization', `Bearer ${localStorage.getItem('jwt')}`);
    headers = headers.set('content-type', 'application/json');
   await this.http.get("http://localhost:25104/api/customer",{headers:headers}).subscribe(res => {      
    console.log(res);
      return res ;
    });  
  }
}