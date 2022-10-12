import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MotsCroisesComponent } from './mots-croises/mots-croises.component';
import { EchecsComponent } from './echecs/echecs.component';
import { BatailleNavaleComponent } from './bataille-navale/bataille-navale.component';
import { DamesComponent } from './dames/dames.component';
import { TimeBombComponent } from './time-bomb/time-bomb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MotsCroisesComponent,
    EchecsComponent,
    BatailleNavaleComponent,
    DamesComponent,
    TimeBombComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
