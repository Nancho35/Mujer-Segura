import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlamarPage } from './llamar';

@NgModule({
  declarations: [
    LlamarPage,
  ],
  imports: [
    IonicPageModule.forChild(LlamarPage),
  ],
})
export class LlamarPageModule {}
