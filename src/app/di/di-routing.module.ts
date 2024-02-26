import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DIPage } from './di.page';

const routes: Routes = [
  {
    path: '',
    component: DIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DIPageRoutingModule {}
