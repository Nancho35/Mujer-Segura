import { App } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HomePage } from "../home/home";
import { anchorDef } from '@angular/core/src/view';
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
  static parametro1 ;
  static texto_alto;
  static texto_medio;
  static texto_bajo;
  static semaforo_alto;
  static semaforo_medio;
  static semaforo_bajo;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public app: App) {
    ResultadoPage.parametro1 = navParams.get("parametro1");
    ResultadoPage.texto_alto = "Tu vida esta en peligro. Es necesario que recibas ayuda especialidad de manera inmediata."
    ResultadoPage.texto_medio = "Tu relación de pareja presenta algunas señales que podrían generar situaciones de violencia."
    ResultadoPage.texto_bajo = "Tu relación de pareja no presenta señales que podrían generar situaciones de violencia. El respeto y la comunicación son clave para que la relación se mantega sana."
 
    ResultadoPage.semaforo_alto = 'assets/imgs/semaforo_rojo.png'
    ResultadoPage.semaforo_medio = 'assets/imgs/semaforo_amarillo.png'
    ResultadoPage.semaforo_bajo = 'assets/imgs/semaforo_verde.png'
    console.log(ResultadoPage.parametro1);
  }

  ionViewDidLoad() {
   
  }


  get TextoResultado(){
    //return ResultadoPage.parametro1;
    if(ResultadoPage.parametro1 > 0 && ResultadoPage.parametro1 <= 3 ){
      return ResultadoPage.texto_medio;
    }
    else if(ResultadoPage.parametro1 >= 4 ){
      return ResultadoPage.texto_alto;
    }else{
      return ResultadoPage.texto_bajo;
    }
  }
   
    get imagePath(){
      if(ResultadoPage.parametro1 > 0 && ResultadoPage.parametro1 <= 3 ){
        return ResultadoPage.semaforo_medio;
      }
      else if(ResultadoPage.parametro1 >= 4 ){
        return ResultadoPage.semaforo_alto;
      }else{
        return ResultadoPage.semaforo_bajo;
      
    }
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
