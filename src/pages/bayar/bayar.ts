import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';

export interface bayarForm {
   id_user:string,
    mst_warga_id:string,
    warga_id:string,
    bank_id:string,
    norek:string,
    bukti:string
    nama:string,
    alamat:string,
}

@Component({
    selector: 'page-bayar',
    templateUrl: 'bayar.html',
    providers: [  UserData ]
  })

  export class BayarPage {

    bayar: bayarForm = { mst_warga_id:'',id_user:'',warga_id: '', bank_id:'' ,norek:'',bukti:'',nama:'',alamat:'' };
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
        this.populateProfile();
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
        this.bayar.warga_id = this.bayar.mst_warga_id
        console.log(this.bayar);
        this.showLoading();
        this.userData.postBayar(this.bayar, this);
        
    }
    }

    populateBank(){
        //this.bankOpt = { 1: 'BCA', 2: 'Mandiri', 3:'BNI' };
        this.userData.getBank(this);
    }
    populateProfile(){
      this.storage.get('profile').then((value) => {
        this.bayar.id_user = value["id_user"];
        this.bayar.warga_id = value["warga_id"];
        this.bayar.nama = value["nama"];
        this.bayar.alamat = value["alamat"];
        this.bayar.mst_warga_id = value["mst_warga_id"];
      });
    }
  }