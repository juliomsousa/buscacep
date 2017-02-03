import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ViaCepData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ViaCepData {

  constructor(public http: Http) {
      console.log('Hello ViaCepData Provider');
  }

  getCep() {
      // console.log(this.http.get('https://viacep.com.br/ws/01001000/json/'));
      // this.http.get('https://viacep.com.br/ws/01001000/json/').subscribe(data => {console.log(data);});
      // this.http.get('https://viacep.com.br/ws/01001000/json/').map(res => res.json()).subscribe(data => {console.log(data);});
      return this.http.get('https://viacep.com.br/ws/01001000/json/').map(res => res.json());
  }

  getCepLocal() {
      return this.http.get('../assets/data/cep.json').map(res => res.json());
  }

}
