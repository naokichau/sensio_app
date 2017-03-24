import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {GoogleMaps} from '../../providers/google-maps';
import {LangCommon, LangMap} from '../../app/languages';
import {AreaDetailPage} from '../area-detail/area-detail';
import {DevicePage} from '../device/device';
import {Database} from '../../providers/database';
import 'rxjs/add/operator/map';
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
  mainMap : any;
  mapOption : any = {
    erDeviceOnly: false
  }
  viewOption : any = [
    {
      text: LangCommon.heatText[0],
      icon: 'ios-thermometer',
      color: 'danger',
      type: 0
    }, {
      text: LangCommon.lightText[0],
      icon: 'md-sunny',
      color: 'secondary',
      type: 1
    }, {
      text: LangCommon.rainText[0],
      icon: 'md-rainy',
      color: 'primary',
      type: 2
    }, {
      text: LangCommon.humidityText[0],
      icon: 'ios-water',
      color: 'primary',
      type: 3
    }, {
      text: LangCommon.searchText[0],
      icon: 'ios-search',
      color: 'dark',
      type: 4
    }, {
      text: "SenseDots",
      icon: 'ios-radio-button-on',
      color: 'primary',
      type: 5
    }, {
      text: LangMap.addAreaText[0],
      icon: 'ios-add-circle',
      color: 'dark',
      type: 6
    }
  ]
  constructor(public navCtrl : NavController, public navParams : NavParams, public maps : GoogleMaps, public actionSheetCtrl : ActionSheetController, public database : Database) {
    this.currentView = this.viewOption[0]
  }
  loadMap() {
    let mapLoaded = this
      .maps
      .init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement)
      .then((map) => {
        this.mainMap = map;
        this
          .database
          .getDevicesList()
          .then((devices) => {
            console.log(devices);
            var contentString = `
                        <ion-item>
      <ion-icon name="md-globe" item-left></ion-icon>
      {{LangSetting.langSetText[0]}}
    </ion-item>
                    `;
            var infowindow = new google
              .maps
              .InfoWindow({content: contentString});
            var marker = new google
              .maps
              .Marker({
                position: {
                  lat: devices[15].attributes.location._latitude,
                  lng: devices[15].attributes.location._longitude
                },
                map: this.mainMap,
                icon: 'assets/image/pin.png'
              });
            marker.addListener('click',()=>{
       this.viewDeviceInfo(devices[15])
            });
          })
      });

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
    console.log(this.currentView);

  }
  viewDeviceInfo(device) {
    let actionSheet = this
      .actionSheetCtrl
      .create({
        title: LangCommon.deviceText[0] + ' ID: '+ device.id,
        subTitle: device.updatedAt,
        cssClass:"deviceInfo",
        buttons: [
          {
            text: device.attributes.temperature + 'ºC',
            icon: this.viewOption[0].icon,
            handler: () => {
            }
          }, {
            text: device.attributes.light+ " lux",
            icon: this.viewOption[1].icon,
            handler: () => {
            }
          }, {
            text: LangCommon.noInfoText[0],
            icon: this.viewOption[2].icon,
            handler: () => {
            }
          }, {
            text: device.attributes.humidity + "%",
            icon: this.viewOption[3].icon,
            handler: () => {
            }
          }, {
            text: LangCommon.moreInfoText[0],
            icon: "ios-information-circle",
            handler: () => {
              this.navCtrl.push(DevicePage)
            }
          }
        ]
      });
    actionSheet.present();
  }
  chooseViewOption() {
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
            text: LangCommon.cancelText[0],
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
