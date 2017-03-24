import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/google-maps';
import { Database } from '../providers/database';
import { MyApp } from './app.component';
import {AnalyticsPage} from '../pages/analytics/analytics';
import { SettingPage } from '../pages/setting/setting';
import {MapPage} from '../pages/map/map';
import {NotificationsPage} from '../pages/notifications/notifications';
import { WelcomePage } from '../pages/welcome/welcome';
import { AreaDetailPage } from '../pages/area-detail/area-detail';
import {WeatherPage} from '../pages/weather/weather';
import {DevicePage} from '../pages/device/device';
import { UserLocalSettingPage } from '../pages/user-local-setting/user-local-setting';
import { TabsPage } from '../pages/tabs/tabs';
@NgModule({
  declarations: [
    MyApp,
    AnalyticsPage,
    SettingPage,
    MapPage,
    NotificationsPage,
    WelcomePage,
    AreaDetailPage,
    WeatherPage,
    UserLocalSettingPage,
    DevicePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {mode: 'md'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnalyticsPage,
    SettingPage,
    MapPage,
    NotificationsPage,
    WelcomePage,
    AreaDetailPage,
    WeatherPage,
    UserLocalSettingPage,
    DevicePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Database,Connectivity,GoogleMaps]
})
export class AppModule {}
