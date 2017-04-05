import { Component } from '@angular/core';
import { ViewController,ToastController } from 'ionic-angular';
/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public viewCtrl: ViewController,private toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  openMain() {
     this.viewCtrl.dismiss();
  }
  
}
