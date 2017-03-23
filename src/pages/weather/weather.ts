import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LangCommon, LangWeather} from '../../app/languages';
/*
  Generated class for the Analytics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
LangCommon: any = LangCommon;
LangWeather: any = LangWeather;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalyticsPage');
  }

}
