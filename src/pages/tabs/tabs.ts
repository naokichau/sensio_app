import { Component } from '@angular/core';

import { AnalyticsPage } from '../analytics/analytics';
import { MapPage } from '../map/map';
import { SettingPage } from'../setting/setting';
import { NotificationsPage} from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AnalyticsPage;
  tab2Root: any = MapPage;
  tab3Root:any = NotificationsPage;
tab4Root: any = SettingPage
  constructor() {

  }
}
