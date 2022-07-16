import { Component, OnInit } from '@angular/core';
import { LoginapiService } from '../shared/loginapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headerGetter } from '../app.module';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  data: any=[];
  constructor(private services: LoginapiService, private http: HttpClient) { }

  ngOnInit() {
    this.getData();
    
  }
  getData() {
    this.http.get("http://localhost:25104/api/customer", { headers: headerGetter() }).
    subscribe(res => {
      this.data = res;
    });
  }
  
}
