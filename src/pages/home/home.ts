import { Component } from '@angular/core';
import { NavController, AlertController, Events,ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { ExplorePage } from '../explore/explore';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { BayarPage } from '../../pages/bayar/bayar';

import { UserData } from '../../providers/user-data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})
export class HomePage {
  public  homeloggedin:boolean = false;
  data = { };
  option: BarcodeScannerOptions;
  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  constructor(
    public toastCtrl:ToastController ,
    private theInAppBrowser: InAppBrowser,
    public events: Events,
    public navCtrl: NavController,
    public BarcodeScanner: BarcodeScanner,
    public userData: UserData,
    public alerCtrl: AlertController
  ) {
   
  }

  ionViewDidLoad() {
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.homeloggedin ===true;
    // });
    
    this.listenToLoginEvents();
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    console.log('ionViewDidLoad HomePage');
  }

 


  scan() {
    
    this.option = {
      prompt:"Silahkan scan barcode"
    }
    this.BarcodeScanner.scan(this.option).then(barcodeData => {
      console.log('barcode :',barcodeData);
      this.data = barcodeData;

      window.open(barcodeData.text, '_blank', 'location=yes');

    }, (err) => {
      //console.log('Error', err);
      console.log(err);
    });
  }

  goBayar(){
    this.navCtrl.push(BayarPage);
  }

  goExplore() {
    this.navCtrl.push(ExplorePage);
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Informasi!',
      message: 'Silahkan login terlebih dahulu untuk akses menu ini',
      buttons: ['Ok']
    });
    alert.present()
  }

  checkloggedin(){
    
  }
 
  listenToLoginEvents() {
   
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
      
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    //this.menu.enable(loggedIn, 'loggedInMenu');
    //this.menu.enable(!loggedIn, 'loggedOutMenu');
    if(loggedIn) {
      this.homeloggedin=true;
    } else {
      // used for an example of ngFor and navigation
      this.homeloggedin=false;
    }
  }

  openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
}
}
