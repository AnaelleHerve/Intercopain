import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageTbComponent } from './time-bomb-game/home-page-tb/home-page-tb.component';
import { GameTbComponent } from './time-bomb-game/game-tb/game-tb.component';
import { EndPageTbComponent } from './time-bomb-game/end-page-tb/end-page-tb.component';
import { RoleTbComponent } from './time-bomb-game/role-tb/role-tb.component';
import { PlayerCardsTbComponent } from './time-bomb-game/player-cards-tb/player-cards-tb.component';
import { WaitingRoomComponent } from './time-bomb-game/waiting-room/waiting-room.component';
import { CreatePartyDialogComponent } from './time-bomb-game/create-party-dialog/create-party-dialog.component';
import { JoinPartyDialogComponent } from './time-bomb-game/join-party-dialog/join-party-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageTbComponent,
    GameTbComponent,
    EndPageTbComponent,
    RoleTbComponent,
    PlayerCardsTbComponent,
    WaitingRoomComponent,
    CreatePartyDialogComponent,
    JoinPartyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreatePartyDialogComponent],
})
export class AppModule {}
