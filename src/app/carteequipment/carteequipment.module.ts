import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteequipmentPageRoutingModule } from './carteequipment-routing.module';

import { CarteequipmentPage } from './carteequipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteequipmentPageRoutingModule
  ],
  declarations: [CarteequipmentPage]
})
export class CarteequipmentPageModule {}
