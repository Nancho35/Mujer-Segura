import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreguntasProvider } from '../../providers/preguntas/preguntas';
import { LoadingController } from 'ionic-angular';
import { ResultadoPage } from "../resultado/resultado";
import { App } from 'ionic-angular';
/**
 * Generated class for the VulnerabilidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vulnerabilidad',
  templateUrl: 'vulnerabilidad.html',
})


export class VulnerabilidadPage {

  question: any;
  salida: any[] = [];
  contador: number = 1

  cards: any;
  category: string = 'gear';

  constructor(public app: App, public PreguntasProvider: PreguntasProvider, public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {

    let loader = this.loading.create({
      content: 'Obteniendo Preguntas...',
      duration: 8000
    });

    loader.present().then(() => {
      this.PreguntasProvider.getPreguntas()
        .then(data => {
          this.question = data;
          this.salida = this.question;
          //console.log(this.question);
        });
      loader.dismiss();
    });
  }

  get filterById() {

    console.log(this.contador);
    console.log(this.salida.filter(x => x.id == this.contador));
    return this.salida.filter(x => x.id == this.contador);


  }

  mcqAnswer(questionID, answer) {
    if (this.contador == this.salida.length) {
      let nav = this.app.getRootNav();
      nav.push(ResultadoPage);
    }
    else {
      this.contador = this.contador + 1;
    }


  }

}
