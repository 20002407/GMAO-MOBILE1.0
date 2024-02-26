import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTPage } from './ot.page';

const routes: Routes = [
  {
    path: '',
    component: OTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTPageRoutingModule {}
