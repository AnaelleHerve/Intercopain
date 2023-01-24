import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTbComponent } from './time-bomb-game/home-page-tb/home-page-tb.component';
import { GameTbComponent } from './time-bomb-game/game-tb/game-tb.component';
import { EndPageTbComponent } from './time-bomb-game/end-page-tb/end-page-tb.component';
import { RoleTbComponent } from './time-bomb-game/role-tb/role-tb.component';
import { PlayerCardsTbComponent } from './time-bomb-game/player-cards-tb/player-cards-tb.component';
import { WaitingRoomComponent } from './time-bomb-game/waiting-room/waiting-room.component';

const routes: Routes = [
  { path: '', component: HomePageTbComponent },
  { path: 'home', component: HomePageTbComponent },
  { path: 'waiting-room', component: WaitingRoomComponent },
  { path: 'game', component: GameTbComponent },
  { path: 'end', component: EndPageTbComponent },
  { path: 'role', component: RoleTbComponent },
  { path: 'cards', component: PlayerCardsTbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
