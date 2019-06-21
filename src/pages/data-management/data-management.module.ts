import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataManagementPage } from './data-management';

@NgModule({
  declarations: [
    DataManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(DataManagementPage),
  ],
})
export class DataManagementPageModule {}
