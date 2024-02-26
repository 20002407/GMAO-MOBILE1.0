import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { OTPageRoutingModule } from './ot-routing.module';

import { OTPage } from './ot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OTPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OTPage]
})
export class OTPageModule {}
