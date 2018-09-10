import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VulnerabilidadPageModule } from '../pages/vulnerabilidad/vulnerabilidad.module';
import { InfoPageModule } from '../pages/info/info.module';
import { LlamarPageModule } from '../pages/llamar/llamar.module';
import { SexualPageModule } from '../pages/sexual/sexual.module';
import { PsicologicoPageModule } from '../pages/psicologico/psicologico.module';
import { FisicaPageModule} from '../pages/fisica/fisica.module';
import { NoticiasPageModule} from '../pages/noticias/noticias.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NoticiaServiceProvider } from '../providers/noticia-service/noticia-service';
import { HomePageModule } from '../pages/home/home.module';

@NgModule({
  declarations: [
    MyApp,
   // HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    VulnerabilidadPageModule,
    InfoPageModule,
    LlamarPageModule,
    SexualPageModule,
    PsicologicoPageModule,
    FisicaPageModule,
    NoticiasPageModule,
    HttpClientModule,
    HttpModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiaServiceProvider
  ]
})
export class AppModule {}
