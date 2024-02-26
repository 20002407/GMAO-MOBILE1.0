import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteactifPageRoutingModule } from './carteactif-routing.module';

import { CarteactifPage } from './carteactif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteactifPageRoutingModule
  ],
  declarations: [CarteactifPage]
})
export class CarteactifPageModule {}
