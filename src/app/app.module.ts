// INICIALIZACION DE LAS PAGINAS DE LA APLICACION CON LAS PROPIEDADES DE SUS TITUTLOS Y CLASES.

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationsPage } from '../pages/notifications/notifications';
import { ExpeditionsPage } from '../pages/expeditions/expeditions';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ExpeditionDetailPage } from '../pages/expedition-detail/expedition-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NotificationsPage,
    ExpeditionsPage,
    SettingsPage,
    TabsPage,
    ExpeditionDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationsPage,
    ExpeditionsPage,
    SettingsPage,
    TabsPage,
    ExpeditionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
