import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {VulnerabilidadPage} from "../vulnerabilidad/vulnerabilidad";
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {

  }

//Linkiar a nueva pagina
  Comenzar() {
    this.navCtrl.push(VulnerabilidadPage);
  }
}
