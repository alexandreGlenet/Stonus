import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoneDetailsPageRoutingModule } from './stone-details-routing.module';

import { StoneDetailsPage } from './stone-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoneDetailsPageRoutingModule
  ],
  declarations: [StoneDetailsPage]
})
export class StoneDetailsPageModule {}
