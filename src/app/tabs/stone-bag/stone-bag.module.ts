import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoneBagPageRoutingModule } from './stone-bag-routing.module';

import { StoneBagPage } from './stone-bag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoneBagPageRoutingModule
  ],
  declarations: [StoneBagPage]
})
export class StoneBagPageModule {}
