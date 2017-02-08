import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BuscaPorRuaPage } from '../pages/busca-por-rua/busca-por-rua';

import { ViaCepData } from '../providers/via-cep-data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    BuscaPorRuaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BuscaPorRuaPage,
    HomePage,
    BuscaPorRuaPage
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      ViaCepData
  ]
})
export class AppModule {}
