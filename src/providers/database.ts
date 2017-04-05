import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {
  DeviceList : any;
  Devices = Parse
    .Object
    .extend("devices")

  constructor(public http : Http) {
    Parse.initialize("sensio");
    Parse.serverURL = 'http://sensioserver.herokuapp.com/parse'
  }

  getDevicesList(boundary?: any) : Promise < any > {
    return new Promise((resolve) => {
      var query = new Parse.Query(this.Devices);
      query.find({
        success: function (results) {
         resolve(results)
        },
        error: function (error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    })
  }
}
