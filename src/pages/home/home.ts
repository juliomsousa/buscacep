import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ViaCepData } from '../../providers/via-cep-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public endereco: Endereco;
  
    constructor(public navCtrl: NavController, public viaCepService: ViaCepData) {
  
    }
  
    buscaCep(cep) {
        this.viaCepService.getCep(cep).subscribe(data => {
            this.endereco = data;
        });
    }
    
}

interface Endereco {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}
