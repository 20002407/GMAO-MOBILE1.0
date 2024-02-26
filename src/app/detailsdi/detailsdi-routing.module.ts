import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsdiPage } from './detailsdi.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsdiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsdiPageRoutingModule {}
