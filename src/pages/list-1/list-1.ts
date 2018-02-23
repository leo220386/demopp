import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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
  ) {
    var beer =  this.navParams.get('data');
    for(var i = 0 ; i<beer.BrandProducts.length; i++){
      var b = beer.BrandProducts[i];
      b.Min = b.StorePrices[0];
      if(b.StorePrices.length>1){
        
      }
      for(var  = 0 ; i<beer.BrandProducts.length; i++){
      
      }  
    }
    this.beer = beer;
    this.loading = this.loadingCtrl.create();
  }

}
