import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartebatimentPageRoutingModule } from './cartebatiment-routing.module';

import { CartebatimentPage } from './cartebatiment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartebatimentPageRoutingModule
  ],
  declarations: [CartebatimentPage]
})
export class CartebatimentPageModule {}
