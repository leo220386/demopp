import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

import { NotificationsPage } from '../pages/notifications/notifications';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { List1Page } from '../pages/list-1/list-1';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  rootPage: any = WalkthroughPage;
  // rootPage: any = FunctionalitiesPage;
  // rootPage: any = TabsNavigationPage;
  textDir: string = "ltr";

  pages: Array<{title: any, icon: string, component: any}>;
  pushPages: Array<{title: any, icon: string, component: any}>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar')
        {
          platform.setDir('rtl', true);
          platform.setDir('ltr', false);
        }
        else
        {
          platform.setDir('ltr', true);
          platform.setDir('rtl', false);
        }
        Observable.forkJoin(
          this.translate.get('Offers'),
         // this.translate.get('FORMS'),
         // this.translate.get('FUNCTIONALITIES'),
         // this.translate.get('LAYOUTS'),
          this.translate.get('Compare')
        ).subscribe(data => {
          this.pages = [
            { title: data[0], icon: 'notifications', component: NotificationsPage },
          ];

          this.pushPages = [
            { title: data[1], icon: 'apps', component: List1Page }
          ];
        });
      });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}
