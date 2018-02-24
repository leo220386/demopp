import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import 'rxjs/Rx';

import { BeerModel } from '../walkthrough/beer.model';

@Component({
  selector: 'list-1-page',
  templateUrl: 'list-1.html'
})
export class List1Page {
  beer : BeerModel = new BeerModel();
  loading: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public inAppBrowser: InAppBrowser
  ) {
    var beer =  this.navParams.get('data');
    for(var i = 0 ; i<beer.BrandProducts.length; i++){
      var b = beer.BrandProducts[i];
      for(var j = 0; j < b.Products.length; j++){
        var p = b.Products[j];
        if(p.StorePrices.length>0){
          p.Min = p.StorePrices[0];
          if(p.StorePrices.length>1){
            p.Max = p.StorePrices[p.StorePrices.length-1];
          }
        }
      }
    }
    
    this.beer = beer;
    this.loading = this.loadingCtrl.create();
  }

  openInAppBrowser(website: string){
    this.inAppBrowser.create(website, '_blank', "location=yes");
  }
}
