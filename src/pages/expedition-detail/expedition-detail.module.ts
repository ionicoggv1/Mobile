import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpeditionDetailPage } from './expedition-detail';

@NgModule({
  declarations: [
    ExpeditionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpeditionDetailPage),
  ],
})
export class ExpeditionDetailPageModule {}
