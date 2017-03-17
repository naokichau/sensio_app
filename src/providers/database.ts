import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {
Devices = Parse.Object.extend("devices")

  constructor(public http: Http) {
Parse.initialize("sensio");
Parse.serverURL = 'http://sensioserver.herokuapp.com/parse'
  }

getDevicesList(boundary?:any){
var query = new Parse.Query(this.Devices);
query.find({
  success: function(results) {
console.log(results);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}
}
