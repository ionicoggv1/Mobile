//COMPONENTES NECESARIOS DE LOS TABS INDICANDOLE EL ROOT.

import { Component } from '@angular/core';

import { NotificationsPage } from '../notifications/notifications';
import { ExpeditionsPage } from '../expeditions/expeditions';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotificationsPage;
  tab2Root = ExpeditionsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
