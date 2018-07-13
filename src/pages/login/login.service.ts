import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class LoginService {
  loginUrl = 'http://localhost:8069';
  options = new RequestOptions({headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})});
  constructor(private httpc: HttpClient) { }
 
  postLogIn(){
      return this.httpc.post(this.loginUrl, {username:'test',password:'test'})
                
  }

  
}