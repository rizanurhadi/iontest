import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform, LoadingController, ToastController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

//import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { RegisterPage } from '../pages/register/register';
import { HomeTabsPage } from '../pages/hometabs/hometabs';
import { LoginPage } from '../pages/login/login';

// prov
import { UserData } from '../providers/user-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeTabsPage;

  pages: Array<{ title: string, component: any,logsOut?: boolean; }>;

  constructor(
    public toastCtrl:ToastController ,
    public events: Events,
    public menu: MenuController,
    public loadingCtrl: LoadingController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public userData: UserData,
    public storage: Storage
  ) {
    this.initializeApp();
    // Check has logged in
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    
    this.listenToLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
    if(page.title == 'Login'){
      this.nav.push(LoginPage);
    } else this.nav.setRoot(page.component);
    
  }

  listenToLoginEvents() {
    this.events.subscribe('user:bayar', () => {
      this.presentToast("Konfirmasi Pembayaran Telah disimpan");
    });
    this.events.subscribe('user:login', () => {
      this.presentToast("User Login Sukses");
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
        this.enableMenu(false);
      }, 2000);
      
      
    });
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  enableMenu(loggedIn: boolean) {
    //this.menu.enable(loggedIn, 'loggedInMenu');
    //this.menu.enable(!loggedIn, 'loggedOutMenu');
    if(loggedIn) {
      this.pages = [
        { title: 'Home', component: HomeTabsPage },
        { title: 'About', component: AboutPage },
        { title: 'Logout', component: HomeTabsPage, logsOut: true  },
      ];
    } else {
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomeTabsPage },
        { title: 'Login', component: LoginPage },
        //{ title: 'Registrasi', component: RegisterPage },
        { title: 'About', component: AboutPage }
      ];
    }
  }
}
