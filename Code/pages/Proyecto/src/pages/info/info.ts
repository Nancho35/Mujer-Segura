import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SexualPage} from '../sexual/sexual';
import { VulnerabilidadPage} from '../vulnerabilidad/vulnerabilidad';
import { PsicológicoPage} from '../psicológico/psicológico';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  
  tab1Root = SexualPage;
  tab2Root = PsicológicoPage;
  tab3Root = VulnerabilidadPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
