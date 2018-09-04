import { Component,Injectable } from '@angular/core';
import { NavController, AlertController, Events,ToastController, } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { ExplorePage } from '../explore/explore';
import { LoginPage } from '../login/login';
//import { RegisterPage } from '../register/register';
import { BayarPage } from '../../pages/bayar/bayar';

import { UserData } from '../../providers/user-data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})
@Injectable()
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
totalIuran = 0;
showtotalIuran = false;
myalert: any;
  constructor(
    public storage: Storage,
    private http: HttpClient,
    public toastCtrl:ToastController ,
    private theInAppBrowser: InAppBrowser,
    public events: Events,
    public navCtrl: NavController,
    public BarcodeScanner: BarcodeScanner,
    public userData: UserData,
    public alertCtrl: AlertController
  ) {
   
  }

  ionViewDidLoad() {
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.homeloggedin ===true;
    // });
    // this.listenCheckTunggakan();
    // this.listenToLoginEvents();
   
    this.listenToLoginEvents();
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    
    this.listenToLoginEvents();
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
      this.listenCheckTunggakan();
    });
  }
 
  listenCheckTunggakan(){
    console.log('cek')
    Promise.all([this.storage.get("tokenauth"), this.storage.get("profile")]).then(values => {

      // console.log("tokenauth", values[0]);
      // console.log("profile", values[1]);
      let profile = values[1];
      // every other thing can happen here e.g call a method
      if(values[0]) {
        console.log('get token')
            let requestOptions =    {                                                                                                                                                                                 
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + values[0]
              }), 
            }; 
            if(profile) {
              console.log('get data')
            this.http.get(this.userData.cekapi + '/?mod=iuran&user=' + profile.id_user,requestOptions)
            .subscribe((data :any)=> {
                console.log("tunggakan", data);
                if(data["status"] == 'success'  ){
                  if(data["data"]["total_tunggakan"]) {
                    var tunggakan : number = data["data"]["total_tunggakan"];
                    if(tunggakan > 0) {
                      this.totalIuran = tunggakan;
                      this.showtotalIuran = true;
                      this.storage.set('totaliuran',data["data"]["total_bayar"]);
                    } else {
                      this.totalIuran = 0;
                      this.showtotalIuran = false;
                      this.storage.set('totaliuran',0);
                    }
                  } else {
                    this.totalIuran = 0;
                    this.showtotalIuran = false;
                    this.storage.set('totaliuran',0);
                    //this.showalert(data["message"]);
                  }
                } else {
                  this.showalert(data["message"]);
                }
                //console.log(data);
              },(error : any)=> {
                //this.showalert("there is something unexpected happens.");
                //this.userData.logout();
                console.log(error);
            });
          } else {
            //this.userData.logout();
          }
      }
        
      });
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
    if(this.totalIuran > 0 ) {
      this.navCtrl.push(BayarPage);
    } else {
      this.showalert('Tidak ada tunggakan yg harus dibayar. Coba cek lagi')
      this.ionViewWillEnter();
    }
    
  }
  goKaswarga(){
    this.storage.get('profile').then((value)=>{
      console.log('http://ngcsmartwarga.info/cms/kaswarga.php?idw=' + value["wilayah_id"]);
      this.openWithInAppBrowser('http://ngcsmartwarga.info/cms/kaswarga.php?idw=' + value["wilayah_id"]);
    })
    
  }

  goExplore() {
    this.navCtrl.push(ExplorePage);
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

  goRegister() {
    //this.navCtrl.push(RegisterPage);
  }

  doAlert() {
    let alert = this.alertCtrl.create({
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

showalert(alertMessage){
  this.myalert = this.alertCtrl.create({
    title: 'Warning',
    message: alertMessage,
    buttons: ['Dismiss']
  });
  this.myalert.present();
}

cekIuran(token,userid){
  let requestOptions =    {                                                                                                                                                                                 
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' +token
    }), 
  }; 

  this.http.get(this.userData.cekapi + '/?mod=iuran&user=' + userid,requestOptions)
            .subscribe((data :any)=> {
                console.log("tunggakan", data);
                if(data["status"] == 'success'  ){
                  if(data["data"]["total_tunggakan"]) {
                    var tunggakan : number = data["data"]["total_tunggakan"];
                    if(tunggakan > 0) {
                      this.totalIuran = tunggakan;
                      this.showtotalIuran = true;
                    } else {
                      this.totalIuran = 0;
                      this.showtotalIuran = false;
                    }
                  } else this.showalert(data["message"]);
                } else {
                  this.showalert(data["message"]);
                }
                //console.log(data);
              },(error : any)=> {
                //this.showalert("there is something unexpected happens.");
                //this.userData.logout();
                console.log(error);
            });
}

}
