import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsdiPageRoutingModule } from './detailsdi-routing.module';

import { DetailsdiPage } from './detailsdi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsdiPageRoutingModule
  ],
  declarations: [DetailsdiPage]
})
export class DetailsdiPageModule {}
