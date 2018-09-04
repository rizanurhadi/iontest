import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
//import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { HomeTabsPage } from '../../pages/hometabs/hometabs';

export interface PassOptions {
  id:string,
  pass: string,
  oldpass: string
  }
@Component({
    selector: 'page-pass',
    templateUrl: 'pass.html',
    providers: [  UserData ]
  })
  export class PassPage {
    mypass: PassOptions = { id:'',pass: '', oldpass: '' };
    submitted = false;

    constructor(
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public events: Events,
        public storage: Storage,
        public navCtrl: NavController, 
        public userData: UserData, 
      ) {}

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

      onPass(form: NgForm) {
        this.submitted = true;
    
        if (form.valid) {
          this.showloading();
          // this.doMockLogin();
          this.userData.postPass(this.mypass,this);
         
        }
      }
    

  }