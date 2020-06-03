import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupLocationPageRoutingModule } from './pickup-location-routing.module';

import { PickupLocationPage } from './pickup-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupLocationPageRoutingModule
  ],
  declarations: [PickupLocationPage]
})
export class PickupLocationPageModule {}
