import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { BayarPage } from '../pages/bayar/bayar';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};


export interface Bank {
  id_bank: string;
  nama_bank: string;
  status: string;
}

export interface LoginForm {
  username: string;
  password: string;
}
// need to refactor this coz duplication in bayar.ts
export interface bayarForm {
  id_user:string,
  mst_warga_id:string,
  warga_id:string,
  bank_id:string,
  norek:string,
  bukti:string,
  nama:string,
  alamat:string,
}

@Injectable()
export class UserData {
  _favorites: string[] = [];
  hosturl= 'http://localhost/yii2app/basicapp/web';
  loginurl = this.hosturl+'/api/login';  // URL to web api
  bayarapi = this.hosturl+'/api/iuran';
  bankapi = this.hosturl+'/api/bank';
  userapi = this.hosturl+'/api/user';
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

  getTokenStorage() : Promise<string>  {
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
    
    return this.http.post(this.loginurl, '{"username":"'+loginform.username+'","password":"'+loginform.password+'"}',httpOptions)
    // using string only without server
    //return '{"message":"token_generated","data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMxMzE5NzM4LCJleHAiOjE1MzEzMjMzMzgsIm5iZiI6MTUzMTMxOTczOCwianRpIjoieTVIQWd4ZUNoeHFtcnVBcCJ9.xg64SDFry_yzNrw1xn5PkB3OLBQlWgkVnece0c4o0Zs"}}'
  }

  postBayar(bayarform: bayarForm, mypage: BayarPage){
   this.getTokenStorage().then((mytoken)=>{
    let requestOptions =    {                                                                                                                                                                                 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + mytoken
        }), 
      }; 
      //bayarform.warga_id = bayarform.mst_warga_id;
      this.http.post(this.bayarapi, bayarform,requestOptions)
      .subscribe((data : any) => {
        //alert(JSON.stringify(data));
        if(data) {
          if(mypage.loading){ mypage.loading.dismiss(); mypage.loading = null; }
          
          mypage.events.publish('user:bayar');
          mypage.navCtrl.pop();
        } else{
          mypage.showalert(data["message"]);
        }
        
      },
      (error : any)=> {
        if(mypage.loading){ mypage.loading.dismiss(); mypage.loading = null; }
        mypage.showalert(error.message);
        
      }
    
    ); 
    });

    
  }

  setUserDataIntoStorage(){
    this.getTokenStorage().then((mytoken)=>{
      let requestOptions =    {                                                                                                                                                                                 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + mytoken
        }), 
      }; console.log('Bearer ' + mytoken);
      this.http.get(this.userapi,requestOptions)
        .subscribe((data :any)=> {
          if(data) {
            console.log(data.warga);
            // this.storage.set('profile', {
            //   id_user:data["warga"]["user_id"],
            //   mst_warga_id:data["warga"]["id"],
            //   warga_id:data["warga"]["warga_id"],
            //   nama:data["warga"]["nama"],
            //   alamat:data["warga"]["alamat"],
            // });
            
          }else{

          }
        })
    });
  }

  setUserDataIntoStorageMock(){
    this.storage.set('profile', {
      id_user:'1',
      mst_warga_id:'1',
      warga_id:'C0001',
      nama:'Saripin',
      alamat:'Jln F',
    });
  }

  getBank(mypage: BayarPage){
    this.getTokenStorage().then((mytoken)=>{
      let requestOptions =    {                                                                                                                                                                                 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + mytoken
        }), 
      };
      mypage.showLoading();
      
      this.http.get(this.bankapi,requestOptions)
          .subscribe((data : any) => {
            //alert(JSON.stringify(data));
            if(data) {
              if(mypage.loading){ mypage.loading.dismiss(); mypage.loading = null; }
              mypage.bankOpt = data.data.bank;
              console.log(data.data.bank.nama_bank)
            } else{
              mypage.showalert(data.message);
            }
            
          },
          (error : any)=> {
            if(mypage.loading){ mypage.loading.dismiss(); mypage.loading = null; }
            mypage.showalert(error.message);
            
          }
    
           ); 

    });
  }
 
 
}
