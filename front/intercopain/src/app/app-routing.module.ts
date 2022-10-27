import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatailleNavaleComponent } from './bataille-navale/bataille-navale.component';
import { DamesComponent } from './dames/dames.component';
import { EchecsComponent } from './echecs/echecs.component';
import { HomePageTbComponent } from './time-bomb-game/home-page-tb/home-page-tb.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MotsCroisesComponent } from './mots-croises/mots-croises.component';
import { TimeBombComponent } from './time-bomb/time-bomb.component';
import { GameTbComponent } from './time-bomb-game/game-tb/game-tb.component';
import { EndPageTbComponent } from './time-bomb-game/end-page-tb/end-page-tb.component';
import { RoleTbComponent } from './time-bomb-game/role-tb/role-tb.component';
import { PlayerCardsTbComponent } from './time-bomb-game/player-cards-tb/player-cards-tb.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'echecs', component: EchecsComponent },
  { path: 'bataille-navale', component: BatailleNavaleComponent },
  { path: 'dames', component: DamesComponent },
  { path: 'mots-croises', component: MotsCroisesComponent },
  { path: 'time-bomb', component: TimeBombComponent },
  { path: 'time-bomb-home', component: HomePageTbComponent },
  { path: 'time-bomb-game', component: GameTbComponent },
  { path: 'time-bomb-end', component: EndPageTbComponent },
  { path: 'time-bomb-role', component: RoleTbComponent },
  { path: 'time-bomb-cards', component: PlayerCardsTbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
