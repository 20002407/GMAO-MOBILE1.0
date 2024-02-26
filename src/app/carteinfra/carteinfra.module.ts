import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteinfraPageRoutingModule } from './carteinfra-routing.module';

import { CarteinfraPage } from './carteinfra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteinfraPageRoutingModule
  ],
  declarations: [CarteinfraPage]
})
export class CarteinfraPageModule {}
