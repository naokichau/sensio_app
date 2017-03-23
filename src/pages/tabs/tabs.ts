import {Component} from '@angular/core';
import {WeatherPage} from '../weather/weather';
import {AnalyticsPage} from '../analytics/analytics';
import {MapPage} from '../map/map';
import {SettingPage} from '../setting/setting';
import {NotificationsPage} from '../notifications/notifications';

@Component({templateUrl: 'tabs.html'})
export class TabsPage {
  // this tells the tabs component which Pages should be each tab's root Page

  tab1Root : any = WeatherPage;
  tab2Root : any = AnalyticsPage;
  tab3Root : any = MapPage;
  tab4Root : any = NotificationsPage;
  tab5Root : any = SettingPage
  constructor() {}
}
