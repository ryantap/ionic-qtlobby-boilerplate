import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private zone: NgZone
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    /**
     * NOTE: Add this to handle deeplink
     * replace "io.ionic.starter" according to your app id
     */
    App.addListener('appUrlOpen', (data: any) => {
      this.zone.run(() => {
          const slug = data.url.split("io.ionic.starter:/").pop();
          console.log(`slug:${slug}`)
          if (slug) {
              this.router.navigateByUrl(slug);
          }
      });
  });
  }
}
