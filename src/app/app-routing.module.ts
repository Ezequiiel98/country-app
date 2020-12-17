import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { CountryComponent } from './screens/country/country.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country/:url', component: CountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
