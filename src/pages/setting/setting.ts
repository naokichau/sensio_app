import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LangCommon, LangSetting} from '../../app/languages';
import { PushSettingPage } from '../push-setting/push-setting';
import { UserLocalSettingPage } from '../user-local-setting/user-local-setting';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
 openPushSet(){
   this.navCtrl.push(PushSettingPage)
 }
  openLocaltionSet(){
   this.navCtrl.push(UserLocalSettingPage)
 }
}
