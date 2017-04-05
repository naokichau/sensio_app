import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LangCommon, LangSetting} from '../../app/languages';
import { UserLocalSettingPage } from '../user-local-setting/user-local-setting';
import { MapPage } from '../map/map';
import {AnalyticsPage} from '../analytics/analytics';
import {NotificationsPage} from '../notifications/notifications';
import {AddDevicePage} from '../add-device/add-device';
/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
LangCommon: any = LangCommon;
LangSetting: any = LangSetting;
appOption: any = {
  useCelsius: localStorage.getItem("useCelsius"),
  enablePush: localStorage.getItem("enablePush")
}
  page: any = [
  AnalyticsPage,MapPage,NotificationsPage,SettingPage,AddDevicePage
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  openLocaltionSet(){
   this.navCtrl.push(UserLocalSettingPage)
 }
 changeTabs(pageId){
  this.navCtrl.setRoot(this.page[pageId])
}
}
