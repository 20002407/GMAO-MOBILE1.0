import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsotPageRoutingModule } from './detailsot-routing.module';

import { DetailsotPage } from './detailsot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsotPageRoutingModule
  ],
  declarations: [DetailsotPage]
})
export class DetailsotPageModule {}
