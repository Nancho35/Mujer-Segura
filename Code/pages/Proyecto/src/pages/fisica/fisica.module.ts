import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FisicaPage } from './fisica';

@NgModule({
  declarations: [
    FisicaPage,
  ],
  imports: [
    IonicPageModule.forChild(FisicaPage),
  ],
})
export class FisicaPageModule {}
