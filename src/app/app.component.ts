import { Component, OnInit } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from "@ionic-native/onesignal/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'PokeDex',
      url: '/folder/pokedex',
      icon: 'mail'
    },
    {
      title: 'Star  wars',
      url: 'star-wars',
      icon: 'paper-plane'
    },
    {
      title: 'Lights',
      url: 'lights/Lights',
      icon: 'flashlight'
    },
    {
      title: 'Temp&Hum',
      url: '/tem-hum',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if(this.platform.is('cordova')){
        this.setUpPush();
      }
    });
  }

  setUpPush(){
    this.oneSignal.startInit('e4a6fa14-eb6d-4b67-b3bb-5040f362d5c8', '247326552624');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(data=>{
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task );
    });
    // this.oneSignal.handleNotificationOpened().subscribe(data=>{
    //   const additionalData = data.notification.payload.additionalData;
    //   this.showAlert('Notification Openeded', 'You alaready read this before', additionalData);
    // });
    this.oneSignal.endInit();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  async showAlert(title, msg, task){
    const alert = await this.alertController.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: ()=> {
            //
          }
        }
      ]
    })
  }
}
