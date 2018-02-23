import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

import { FacebookLoginService } from '../facebook-login/facebook-login.service';

//import { BeerModel } from './beer.model';
import { BeerService } from './beer.service';

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html'
})

export class WalkthroughPage {
  lastSlide = false;
  login: FormGroup;
  main_page: { component: any };
  loading: any;

  @ViewChild('slider') slider: Slides;

  constructor(
    public nav: NavController,
    public facebookLoginService: FacebookLoginService,
    public loadingCtrl: LoadingController,
    public beerService: BeerService
  ) {
  this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  skipIntro() {
    // You can skip to main app
    // this.nav.setRoot(TabsNavigationPage);

    // Or you can skip to last slide (login/signup slide)
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
    this.nav.push(LoginPage);
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  doLogin(){
    this.loading = this.loadingCtrl.create();
    this.beerService
      .getData()
      .then(data => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component, { data : data});
      });
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    // let this = this;

    this.facebookLoginService.getFacebookUser()
    .then((data) => {
       // user is previously logged with FB and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.facebookLoginService.doFacebookLogin()
      .then((res) => {
        this.beerService
        .getData()
        .then(data => {
          this.loading.dismiss();
          this.nav.setRoot(this.main_page.component, { data : data});
        });
      }, (err) => {
        console.log("Facebook Login error", err);
      });
    });
  }

  
}
