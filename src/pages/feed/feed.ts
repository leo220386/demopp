import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { BeerModel } from '../walkthrough/beer.model';


@Component({
  selector: 'feed-page',
  templateUrl: 'feed.html'
})
export class FeedPage {
  beer : BeerModel = new BeerModel();
  loading: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) {
    this.beer = this.navParams.get('data')
    this.loading = this.loadingCtrl.create();
  }

}
