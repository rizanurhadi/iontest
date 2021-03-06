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
import { PassPage } from '../pages/pass/pass';
import { Tab2 } from '../pages/hometabs/tab2-page';

import { UserData } from '../providers/user-data';
import { IonicStorageModule } from '@ionic/storage';

import { InAppBrowser } from '@ionic-native/in-app-browser';
// File Handler
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import {  ImageResizer  } from '@ionic-native/image-resizer';

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
    BayarPage,
    PassPage
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
    AboutPage,
    PassPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    UserData,
    InAppBrowser,
    ImageResizer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    Transfer,
    Camera,
    FilePath,
  ]
})
export class AppModule {}
