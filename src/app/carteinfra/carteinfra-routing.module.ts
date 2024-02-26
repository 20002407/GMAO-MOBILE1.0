import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteinfraPage } from './carteinfra.page';

const routes: Routes = [
  {
    path: '',
    component: CarteinfraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteinfraPageRoutingModule {}
