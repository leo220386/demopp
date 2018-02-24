import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import 'rxjs/Rx';

import { BeerModel } from '../walkthrough/beer.model';

@Component({
  selector: 'notifications-page',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  beer : BeerModel = new BeerModel();
  loading: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public inAppBrowser: InAppBrowser
  ) {
    this.beer = this.navParams.get('data')
    this.loading = this.loadingCtrl.create();
  }

}