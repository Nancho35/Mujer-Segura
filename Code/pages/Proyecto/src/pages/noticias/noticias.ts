import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaServiceProvider} from '../../providers/noticia-service/noticia-service';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  users: any;
  salida: any[]=[];
  
  cards: any;
  category: string = 'gear';

  constructor(public loading: LoadingController,public navCtrl: NavController, public NoticiaServiceProvider: NoticiaServiceProvider) {
    //this.cards = new Array(10);
  }

  ionViewDidLoad() {
    let loader = this.loading.create({
      content: 'Obteniendo Noticias...',
      duration: 8000
    });

    loader.present().then(() => {
      this.NoticiaServiceProvider.getNoticias()
      .then(data => {
        this.users = data;
        this.salida = this.users;
        console.log(this.users);
      });
      loader.dismiss();
    });

   
  }

}
