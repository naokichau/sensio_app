import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LangNotifications} from '../../app/languages';
import { SettingPage } from '../setting/setting';
import {MapPage} from '../map/map';
import {AnalyticsPage} from '../analytics/analytics';
import {AddDevicePage} from '../add-device/add-device';
/*
  Generated class for the Notifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
LangNotifications:any = LangNotifications;
page: any = [
  AnalyticsPage,MapPage,NotificationsPage,SettingPage,AddDevicePage
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

changeTabs(pageId){
  this.navCtrl.setRoot(this.page[pageId])
}

}
