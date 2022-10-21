import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatailleNavaleComponent } from './bataille-navale/bataille-navale.component';
import { DamesComponent } from './dames/dames.component';
import { ChessComponent } from './chess/chess.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MotsCroisesComponent } from './mots-croises/mots-croises.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'bataille-navale', component: BatailleNavaleComponent },
  { path: 'dames', component: DamesComponent },
  { path: 'mots-croises', component: MotsCroisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
