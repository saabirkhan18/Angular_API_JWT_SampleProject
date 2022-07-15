import { Component, OnInit } from '@angular/core';
import { LoginapiService } from '../shared/loginapi.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private services:LoginapiService) { }

  ngOnInit(): void {
   const data= this.services.getData();
   console.log(data);
  }

}
