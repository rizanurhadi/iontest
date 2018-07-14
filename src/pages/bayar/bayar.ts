import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';



export interface bayarForm {
    id_user:string,
    id_warga:string,
    id_bank:string,
    norek:string,
    bukti:string
}

@Component({
    selector: 'page-bayar',
    templateUrl: 'bayar.html',
    providers: [  UserData ]
  })

  export class BayarPage {

    bayar: bayarForm = { id_user: '', id_warga: '', id_bank:'' ,norek:'',bukti:'' };
    submitted = false;
    bankKeys = Object.keys;
    bankOpt = {};  

    constructor(
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public events: Events,
        public storage: Storage,
        public navCtrl: NavController, 
        public userData: UserData, ){
        
        this.populateBank();
    }
    // refactoring idea : need loading and alert module because duplication in login ts
    loading: any = this.loadingCtrl.create({
        content: "Please wait..."
      })
    myalert: any;
    showLoading(){
        this.loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        this.loading.present();
      }
    killLoading(){
        if(this.loading){ this.loading.dismiss(); this.loading = null; }
    }
    showalert(alertMessage){
        this.myalert = this.alertCtrl.create({
          title: 'Warning',
          message: alertMessage,
          buttons: ['Dismiss']
        });
        this.myalert.present();
      }
    // end refactoring alert and loading module
    submitBayar(form: NgForm){
      this.submitted = true;

      if (form.valid ) {
        this.showLoading();
        this.userData.postBayar(this.bayar, this);
        
    }
    }

    populateBank(){
        this.bankOpt = { 1: 'BCA', 2: 'Mandiri', 3:'BNI' };
    }
  }