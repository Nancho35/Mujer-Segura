import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoticiaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  getNoticias(){
    
    return new Promise(resolve => {
      this.http.get('https://frozen-shelf-75757.herokuapp.com/noticia.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    
  }


}
