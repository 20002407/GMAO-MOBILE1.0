import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DIPageRoutingModule } from './di-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DIPage } from './di.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DIPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DIPage]
})
export class DIPageModule {}
