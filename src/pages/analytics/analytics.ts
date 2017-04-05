import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LangCommon, LangAnalytics} from '../../app/languages';
import { SettingPage } from '../setting/setting';
import {MapPage} from '../map/map';
import {NotificationsPage} from '../notifications/notifications';
import {AddDevicePage} from '../add-device/add-device';
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
LangAnalytics: any = LangAnalytics
page: any = [
  AnalyticsPage,MapPage,NotificationsPage,SettingPage,AddDevicePage
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

changeTabs(pageId){
  this.navCtrl.setRoot(this.page[pageId])
}

}
