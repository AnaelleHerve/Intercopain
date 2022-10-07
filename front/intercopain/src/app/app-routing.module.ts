import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatailleNavaleComponent } from './bataille-navale/bataille-navale.component';
import { DamesComponent } from './dames/dames.component';
import { EchecsComponent } from './echecs/echecs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MotsCroisesComponent } from './mots-croises/mots-croises.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'echecs', component: EchecsComponent },
  { path: 'bataille-navale', component: BatailleNavaleComponent },
  { path: 'dames', component: DamesComponent },
  { path: 'mots-croises', component: MotsCroisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
