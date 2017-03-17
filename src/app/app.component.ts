import { Component } from '@angular/core';
import { Platform,ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public modalCtrl : ModalController) {
this.initConfig()
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
       let welcomeModal = this
          .modalCtrl
          .create(WelcomePage);
        welcomeModal.present();
    });
  }
  initConfig(){
    console.log(localStorage.getItem("useCelsius"));
    
        if (localStorage.getItem("useCelsius") === null){
      localStorage.setItem("useCelsius","true")
    }
         if (localStorage.getItem("enablePush") === null){
      localStorage.setItem("enablePush","false")
    }
  }
}
