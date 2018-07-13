import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Tab2 } from './tab2-page';

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="home" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="chatbubbles" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class HomeTabsPage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = Tab2;
  }
}
