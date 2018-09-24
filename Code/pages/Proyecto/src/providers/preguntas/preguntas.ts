import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PreguntasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreguntasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PreguntasProvider Provider');
  }

  getPreguntas(){
    
    return new Promise(resolve => {
      this.http.get('https://test-api-hernan.herokuapp.com/answers.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    
  }

  radioChecked($event){
    console.log($event);
  }

}
