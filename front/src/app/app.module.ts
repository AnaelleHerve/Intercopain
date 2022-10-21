import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MotsCroisesComponent } from './mots-croises/mots-croises.component';
import { BatailleNavaleComponent } from './bataille-navale/bataille-navale.component';
import { DamesComponent } from './dames/dames.component';
import { PawnComponent } from './dames/pawn/pawn.component';
import { BoardComponent } from './dames/board/board.component';
import { SquareComponent } from './dames/square/square.component';
import { GameService } from './dames/game.services';
import { KingComponent } from './dames/king/king.component';
import { ConsoleComponent } from './dames/console/console.component';
import { ChessComponent } from './chess/chess.component';
import { ChessBishopComponent } from './chess/chess-piece/chess-bishop/chess-bishop.component';
import { ChessKingComponent } from './chess/chess-piece/chess-king/chess-king.component';
import { ChessKnightComponent } from './chess/chess-piece/chess-knight/chess-knight.component';
import { ChessPawnComponent } from './chess/chess-piece/chess-pawn/chess-pawn.component';
import { ChessQueenComponent } from './chess/chess-piece/chess-queen/chess-queen.component';
import { ChessRockComponent } from './chess/chess-piece/chess-rock/chess-rock.component';
import { ChessBoardComponent } from './chess/chess-board/chess-board.component';
import { ChessConsoleComponent } from './chess/chess-console/chess-console.component';
import { ChessGameService } from './chess/chess-game.service';
import { ChessSquareComponent } from './chess/chess-square/chess-square.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MotsCroisesComponent,
    ChessComponent,
    BatailleNavaleComponent,
    DamesComponent,

    //checker component
    PawnComponent,
    BoardComponent,
    SquareComponent,
    KingComponent,
    ConsoleComponent,

    //chess component
    ChessBishopComponent,
    ChessBoardComponent,
    ChessConsoleComponent,
    ChessKingComponent,
    ChessKnightComponent,
    ChessPawnComponent,
    ChessQueenComponent,
    ChessRockComponent,
    ChessSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService,ChessGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
