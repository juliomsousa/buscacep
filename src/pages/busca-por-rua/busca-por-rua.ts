import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ViaCepData } from '../../providers/via-cep-data';

@Component({
  selector: 'page-busca-por-rua',
  templateUrl: 'busca-por-rua.html'
})
export class BuscaPorRuaPage {
  
    public enderecos: Endereco[];
  
    constructor(public navCtrl: NavController, public viaCepService: ViaCepData) {
    }
  
    buscaEndereco(uf, cidade, endereco) {
        this.viaCepService.getEndereco(uf, cidade, endereco).subscribe(data => {
            this.enderecos = data;
            console.log(data);
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
