import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LangCommon, LangAnalytics} from '../../app/languages';
/*
  Generated class for the Analytics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html'
})
export class AnalyticsPage {
LangCommon: any = LangCommon;
LangAnalytics: any = LangAnalytics;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalyticsPage');
  }

}
