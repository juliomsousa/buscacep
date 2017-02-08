import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BuscaPorRuaPage } from '../busca-por-rua/busca-por-rua';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root: any = HomePage;
    tab2Root: any = BuscaPorRuaPage;
    //tab3Root = Page3;
  
    constructor() {
  
  }

}
