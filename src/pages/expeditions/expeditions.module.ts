import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpeditionsPage } from './expeditions';

@NgModule({
  declarations: [
    ExpeditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpeditionsPage),
  ],
})
export class ExpeditionsPageModule {}
