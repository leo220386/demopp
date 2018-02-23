import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ListingPage } from '../listing/listing';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';
import { BeerModel } from '../walkthrough/beer.model';
import { List1Page } from '../list-1/list-1';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  beer : BeerModel = new BeerModel();
  tab1Root: any;
  tab3Root: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
  ) {
    this.beer = this.navParams.get('data');
    this.tab3Root = NotificationsPage;
    this.tab1Root = List1Page;
  }
}

