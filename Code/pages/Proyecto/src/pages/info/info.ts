import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SexualPage} from '../sexual/sexual';
import { VulnerabilidadPage} from '../vulnerabilidad/vulnerabilidad';
import { PsicológicoPage} from '../psicológico/psicológico';
import { FisicaPage } from '../fisica/fisica'

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  
  tab1Root = SexualPage;
  tab2Root = PsicológicoPage;
  tab3Root = FisicaPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
