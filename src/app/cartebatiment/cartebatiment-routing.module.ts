import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartebatimentPage } from './cartebatiment.page';

const routes: Routes = [
  {
    path: '',
    component: CartebatimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartebatimentPageRoutingModule {}
