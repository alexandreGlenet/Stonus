import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StonesPageRoutingModule } from './stones-routing.module';

import { StonesPage } from './stones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StonesPageRoutingModule
  ],
  declarations: [StonesPage]
})
export class StonesPageModule {}
