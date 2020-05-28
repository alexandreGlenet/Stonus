import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StonePageRoutingModule } from './stone-routing.module';

import { StonePage } from './stone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StonePageRoutingModule
  ],
  declarations: [StonePage]
})
export class StonePageModule {}
