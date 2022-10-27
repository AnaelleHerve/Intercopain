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
import { FormsModule } from '@angular/forms';
import { HomePageTbComponent } from './time-bomb-game/home-page-tb/home-page-tb.component';
import { GameTbComponent } from './time-bomb-game/game-tb/game-tb.component';
import { EndPageTbComponent } from './time-bomb-game/end-page-tb/end-page-tb.component';
import { RoleTbComponent } from './time-bomb-game/role-tb/role-tb.component';
import { PlayerCardsTbComponent } from './time-bomb-game/player-cards-tb/player-cards-tb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MotsCroisesComponent,
    EchecsComponent,
    BatailleNavaleComponent,
    DamesComponent,
    TimeBombComponent,
    HomePageTbComponent,
    GameTbComponent,
    EndPageTbComponent,
    RoleTbComponent,
    PlayerCardsTbComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
