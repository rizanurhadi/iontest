import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};

const httpOptionsAuth = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


export interface LoginForm {
  username: string;
  password: string;
}

export interface bayarForm {
  id_user:string,
  id_warga:string,
  id_bank:string,
  norek:string,
  bukti:string
}

@Injectable()
export class UserData {
  _favorites: string[] = [];
  hosturl= 'localhost:8000';
  loginurl = 'http://'+this.hosturl+'/api/auth/login';  // URL to web api
  bayarapi = 'http://'+this.hosturl+'/api/iuran'
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public events: Events,
    public storage: Storage,
    private http: HttpClient
    
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  getTokenStorage(): Promise<string> {
    return this.storage.get('tokenauth').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkIsLoggedIn(): Promise<boolean>{
    //if(this.storage.get(this.HAS_LOGGED_IN)) { return true; } else {return false; }
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };


  postLogin(loginform: LoginForm) {
    
    return this.http.post(this.loginurl, '{"email":"'+loginform.username+'","password":"'+loginform.password+'"}',httpOptions)
    // using string only without server
    //return '{"message":"token_generated","data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMxMzE5NzM4LCJleHAiOjE1MzEzMjMzMzgsIm5iZiI6MTUzMTMxOTczOCwianRpIjoieTVIQWd4ZUNoeHFtcnVBcCJ9.xg64SDFry_yzNrw1xn5PkB3OLBQlWgkVnece0c4o0Zs"}}'
  }

  postBayar(bayarform: bayarForm){
    this.getTokenStorage().then((mytoken)=>{
      httpOptionsAuth.headers.set('Authorization',mytoken);
    });
    console.log(httpOptionsAuth);
      return this.http.post(this.bayarapi, bayarform,httpOptionsAuth);
    
  }
 
 
}
