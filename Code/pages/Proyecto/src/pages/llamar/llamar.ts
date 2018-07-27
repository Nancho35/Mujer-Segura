import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the LlamarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-llamar',
  templateUrl: 'llamar.html',
})
export class LlamarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
    console.log('ionViewDidLoad LlamarPage');
    this.callNumber.callNumber("165", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
    
  }
  }


