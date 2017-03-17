import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GoogleMaps} from '../../providers/google-maps';
import {LangCommon, LangMap} from '../../app/languages';
import {AreaDetailPage} from '../area-detail/area-detail';
import {Database} from '../../providers/database';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({selector: 'page-map', templateUrl: 'map.html'})
export class MapPage {
  @ViewChild('map')mapElement : ElementRef;
  @ViewChild('pleaseConnect')pleaseConnect : ElementRef;
  LangCommon : any = LangCommon;
  LangMap : any = LangMap;
  currentView : any;
  viewOption : any = [
    {
      text: LangCommon.heatText[0],
      icon: 'ios-thermometer',
      color: 'danger'
    }, {
      text: LangCommon.lightText[0],
      icon: 'md-sunny',
      color: 'sun'
    }, {
      text: LangCommon.rainText[0],
      icon: 'md-rainy',
      color: 'primary'
    }, {
      text: LangCommon.humidityText[0],
      icon: 'ios-water',
      color: 'secondary'
    }, {
      text: LangCommon.errorDeviceText[0],
      icon: 'ios-warning',
      color: 'dark'
    }, {
      text: LangCommon.searchText[0],
      icon: 'ios-search',
      color: 'dark'
    }, {
      text: LangMap.addAreaText[0],
      icon: 'ios-add-circle',
      color: 'dark'
    }
  ]
  constructor(public navCtrl : NavController, public navParams : NavParams, public maps : GoogleMaps, public actionSheetCtrl : ActionSheetController, public database : Database) {
    this.currentView = this.viewOption[0]
    database.getDevicesList();
  }
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
  viewAreaDetail(areaId) {
    this
      .navCtrl
      .push(AreaDetailPage, {id: areaId})
  }
  changeView(type : number) {
    this.currentView = this.viewOption[type];
  }
  presentActionSheet() {
    let actionSheet = this
      .actionSheetCtrl
      .create({
        buttons: [
          {
            text: this.viewOption[0].text,
            icon: this.viewOption[0].icon,
            handler: () => {
              this.changeView(0)
            }
          }, {
            text: this.viewOption[1].text,
            icon: this.viewOption[1].icon,
            handler: () => {
              this.changeView(1)
            }
          }, {
            text: this.viewOption[2].text,
            icon: this.viewOption[2].icon,
            handler: () => {
              this.changeView(2)
            }
          }, {
            text: this.viewOption[3].text,
            icon: this.viewOption[3].icon,
            handler: () => {
              this.changeView(3)
            }
          }, {
            text: this.viewOption[4].text,
            icon: this.viewOption[4].icon,
            handler: () => {
              this.changeView(4)
            }
          }, {
            text: this.viewOption[5].text,
            icon: this.viewOption[5].icon,
            handler: () => {
              this.changeView(5)
            }
          }, {
            text: this.viewOption[6].text,
            icon: this.viewOption[6].icon,
            handler: () => {
              this.changeView(6)
            }
          }, {
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
