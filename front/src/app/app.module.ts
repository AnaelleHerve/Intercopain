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
import { PawnComponent } from './dames/pawn/pawn.component';
import { BoardComponent } from './dames/board/board.component';
import { SquareComponent } from './dames/square/square.component';
import { GameService } from './dames/game.services';
import { KingComponent } from './dames/king/king.component';
import { ConsoleComponent } from './dames/console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MotsCroisesComponent,
    EchecsComponent,
    BatailleNavaleComponent,
    DamesComponent,
    PawnComponent,
    BoardComponent,
    SquareComponent,
    KingComponent,
    ConsoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
