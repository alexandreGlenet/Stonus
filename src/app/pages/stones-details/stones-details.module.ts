import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StonesDetailsPageRoutingModule } from './stones-details-routing.module';

import { StonesDetailsPage } from './stones-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StonesDetailsPageRoutingModule
  ],
  declarations: [StonesDetailsPage]
})
export class StonesDetailsPageModule {}
