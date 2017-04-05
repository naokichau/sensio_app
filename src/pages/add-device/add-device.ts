import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LangCommon} from '../../app/languages';
import { SettingPage } from '../setting/setting';
import {MapPage} from '../map/map';
import {AnalyticsPage} from '../analytics/analytics';
import {NotificationsPage} from '../notifications/notifications';
/*
  Generated class for the Analytics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html'
})
export class AddDevicePage {
LangCommon: any = LangCommon;
  page: any = [
  AnalyticsPage,MapPage,NotificationsPage,SettingPage,AddDevicePage
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
changeTabs(pageId){
  this.navCtrl.setRoot(this.page[pageId])
}
}
