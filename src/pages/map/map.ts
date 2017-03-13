import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GoogleMaps} from '../../providers/google-maps';
import {LangCommon,LangMap } from '../../app/languages';
import {AreaDetailPage} from '../area-detail/area-detail';
/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map')mapElement : ElementRef;
  @ViewChild('pleaseConnect')pleaseConnect : ElementRef;
  LangCommon: any = LangCommon;
  LangMap: any = LangMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, public maps : GoogleMaps, public actionSheetCtrl: ActionSheetController) {}
  loadMap() {
    let mapLoaded = this
      .maps
      .init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement)
      .then((map) => {});
  }
  ionViewDidLoad() {
    setTimeout(() => {
      this.loadMap()
    }, 1000);
  }
viewAreaDetail(areaId){
this.navCtrl.push(AreaDetailPage,{id:areaId})
}
presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: LangCommon.heatText[0],
          icon:'ios-thermometer',
          handler: () => {}
        },{
          text: LangCommon.lightText[0],
          icon:'md-sunny',
          handler: () => {}
        },{
          text: LangCommon.rainText[0],
          icon:'md-rainy',
          handler: () => {}
        },{
          text: LangCommon.humidityText[0],
          icon:'ios-water',
          handler: () => {}
        },{
          text: LangCommon.errorDeviceText[0],
          icon:'ios-warning',
          handler: () => {}
        },{
          text: LangCommon.searchText[0],
          icon:'ios-search',
          handler: () => {}
        },{
          text: LangMap.addAreaText[0],
          icon:'ios-add-circle',
          handler: () => {}
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
