import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import{ JwtModule}from '@auth0/angular-jwt';
import { ValueArrayPipePipe } from './value-array-pipe.pipe'

export function tokenGetter()
{
  return localStorage.getItem('jwt');
}

export function headerGetter()
{
  let headers = new HttpHeaders();
  headers = headers.set('authorization', `Bearer ${localStorage.getItem('jwt')}`);
  headers = headers.set('content-type', 'application/json');
  return headers;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    ValueArrayPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:25104/"],
       disallowedRoutes:[]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
