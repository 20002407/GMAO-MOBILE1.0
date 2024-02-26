import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteactifPage } from './carteactif.page';

const routes: Routes = [
  {
    path: '',
    component: CarteactifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteactifPageRoutingModule {}
