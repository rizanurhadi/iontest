import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { BayarPage } from '../pages/bayar/bayar';

import { HomeTabsPage } from '../pages/hometabs/hometabs';
import { Tab2 } from '../pages/hometabs/tab2-page';

import { UserData } from '../providers/user-data';
import { IonicStorageModule } from '@ionic/storage';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    HomeTabsPage,
    Tab2,
    MyApp,
    HomePage,
    ExplorePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    BayarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomeTabsPage,
    Tab2,
    MyApp,
    HomePage,
    ExplorePage,
    LoginPage,
    RegisterPage,
    BayarPage,
    AboutPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    UserData,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
