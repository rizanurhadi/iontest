import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
//import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { HomeTabsPage } from '../../pages/hometabs/hometabs';
//import { MyApp } from '../../app/app.component';

export interface UserOptions {
  username: string,
  password: string
}
export interface LoginResponse{
  message:string,
  data:string,
  error:string,
}
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [  UserData ]
})
export class LoginPage {
  login: UserOptions = { username: 'admin', password: '123qwe' };
  submitted = false;
  
  constructor(
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
    public storage: Storage,
    public navCtrl: NavController, 
    public userData: UserData, 
  ) {
  }

  loading: any = this.loadingCtrl.create({
    content: "Please wait..."
  })

  myalert: any;

  showloading(){
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loading.present();
  }
  showalert(alertMessage, title?){
    this.myalert = this.alertCtrl.create({
      title: 'Warning ' + title,
      message: alertMessage,
      buttons: ['Dismiss']
    });
    this.myalert.present();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.showloading();
      // this.doMockLogin();
      this.doPostLogin();
      
     
    }
  }

  doMockLogin(){
    this.showalert('Login Sukses');
    this.storage.set('hasLoggedIn', true);
    // set storage token, nama, alamat, warga_id, nohp,
    this.storage.set('tokenauth', 'tokenready');
    this.userData.setUserDataIntoStorageMock();
    //console.log( data["data"]["token"]);
    this.events.publish('user:login');
    if(this.loading){ this.loading.dismiss(); this.loading = null; }
    this.navCtrl.setRoot(HomeTabsPage);
  }

  doPostLogin(){
    this.userData.postLogin(this.login)
            .subscribe((data : any)=> {
              //alert(JSON.stringify(data));
              if(data.data) {
                if(this.loading){ this.loading.dismiss(); this.loading = null; }
                this.storage.set('hasLoggedIn', true);
                // set storage token, nama, alamat, warga_id, nohp,
                this.storage.set('tokenauth', data.data.access_token).then(()=>{
                  console.log('token : ' + data.data.access_token)
                  this.userData.setUserDataIntoStorage();
                  //console.log( data["data"]["token"]);
                  this.events.publish('user:login');
                  this.navCtrl.setRoot(HomeTabsPage);
                });
                
              } else{
                this.showalert(data.message);
              }
              
            },
            error=> {
              if(this.loading){ this.loading.dismiss(); this.loading = null; }
              let mystring = '';
              let itemsProcessed = 0;
              error.error.forEach((item,index,array)=>{
                itemsProcessed++;
                    mystring += '<ion-item>'+item.message+'</ion-item>';
                    if(itemsProcessed === array.length) {
                      this.showalert(this.cberrorArray(mystring), error.statusText);
                    }
              })
              
              //alert(JSON.stringify(error.error));
            }
          
          );
      
  }

  cberrorArray(mystring){
    return '<ion-list>' + mystring + '</ion-list>';
    

  }

}
