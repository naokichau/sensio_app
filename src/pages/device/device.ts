import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {LangCommon, LangDevice} from '../../app/languages';
import {Database} from '../../providers/database';
import 'rxjs/add/operator/map';
import * as Chartist from 'chartist';

import {ChartType, ChartEvent} from 'ng-chartist';
/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export interface Chart {
  type : ChartType;
  data : Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({selector: 'page-device', templateUrl: 'device.html'})
export class DevicePage {
  LangCommon : any = LangCommon;
  LangDevice : any = LangDevice;
  charts : Chart[];
  constructor(public navCtrl : NavController, public navParams : NavParams, public actionSheetCtrl : ActionSheetController, public database : Database) {
    this.charts = [
      {
        type: 'Line',
        data: {
          "labels": [
           "","","","","","","","now"
          ],
          "series": [
            [
          30,31,33,31,30,32,30,31
            ]
          ]
        },
        options: {
          low:20,
          showArea: true
        }
      }
    ]
  }

  goBack() {
    this
      .navCtrl
      .pop(this)
  }

  viewOption() {
    let actionSheet = this
      .actionSheetCtrl
      .create({
        buttons: [
          {
            text: LangCommon.moreInfoText[0],
            icon: "ios-information-circle",
            handler: () => {
              this
                .navCtrl
                .push(DevicePage)
            }
          }
        ]
      });
    actionSheet.present();
  }

}
