import {Injectable} from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import {Connectivity} from './connectivity';
import {Geolocation} from 'ionic-native';
import {mapStyles} from '../app/map-styles';

@Injectable()
export class GoogleMaps {

  mapElement : any;
  pleaseConnect : any;
  map : any;
  mapInitialised : boolean = false;
  mapLoaded : any;
  mapLoadedObserver : any;
  currentMarker : any;
  apiKey : string;

  constructor(public connectivityService : Connectivity, private toastCtrl : ToastController) {}

  presentToast(text) {
    let toast = this
      .toastCtrl
      .create({message: text, showCloseButton: true, position: 'top'});

    toast.present();
  }

  init(mapElement : any, pleaseConnect : any) : Promise < any > {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    return this.loadGoogleMaps();

  }

  loadGoogleMaps() : Promise < any > {

    return new Promise((resolve) => {
      if (typeof google == "undefined" || typeof google.maps == "undefined") {
        this.apiKey = "AIzaSyB7xTU3DSM7bS7imq4h_aESuHl39z06_Ec"
        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();
        if (this.connectivityService.isOnline()) {
          window['mapInit'] = () => {

            this
              .initMap()
              .then((map) => {
                resolve(map);
              });
            this.enableMap();
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (this.apiKey) {
            script.src = 'https://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'https://maps.google.com/maps/api/js?callback=mapInit';
          }

          document
            .body
            .appendChild(script);

        }
      } else {

        this.presentToast("4");
        if (this.connectivityService.isOnline()) {
          this
            .initMap()
            .then((map) => {
              resolve(map);
            });
          this.enableMap();
        } else {
          this.disableMap();
        }

      }

      this.addConnectivityListeners();

    });

  }

  initMap() : Promise < any > {

    this.mapInitialised = true;

    return new Promise((resolve) => {

      Geolocation
        .getCurrentPosition()
        .then((position) => {

          // let latLng = new google.maps.LatLng(position.coords.latitude,
          // position.coords.longitude);
          let latLng = new google
            .maps
            .LatLng(10.7761062, 106.6607243);

          let mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            options: {
              mapTypeControl: false,
              zoomControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              styles: mapStyles,
              //  gestureHandling: 'none'
            }
          }

          this.map = new google
            .maps
            .Map(this.mapElement, mapOptions);
          resolve(this.map);

        });

    });

  }

  disableMap() : void {

    if(this.pleaseConnect) {
      this.pleaseConnect.style.display = "block";
    }

  }

  enableMap() : void {

    if(this.pleaseConnect) {
      this.pleaseConnect.style.display = "none";
    }

  }

  addConnectivityListeners() : void {

    this
      .connectivityService
      .watchOnline()
      .subscribe(() => {

        console.log("online");

        setTimeout(() => {

          if (typeof google == "undefined" || typeof google.maps == "undefined") {
            this.loadGoogleMaps();
          } else {
            if (!this.mapInitialised) {
              this.initMap();
            }

            this.enableMap();
          }

        }, 2000);

      });

    this
      .connectivityService
      .watchOffline()
      .subscribe(() => {

        console.log("offline");

        this.disableMap();

      });

  }

}