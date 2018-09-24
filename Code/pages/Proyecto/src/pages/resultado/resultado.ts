import { App } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HomePage } from "../home/home";
/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

  Llamar() {
    this.callNumber.callNumber("155", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  Buscar(event) {
    let nav = this.app.getRootNav();
    nav.push(HomePage);
  }

}
