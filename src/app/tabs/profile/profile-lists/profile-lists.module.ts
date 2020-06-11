import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileListsPageRoutingModule } from './profile-lists-routing.module';

import { ProfileListsPage } from './profile-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileListsPageRoutingModule
  ],
  declarations: [ProfileListsPage]
})
export class ProfileListsPageModule {}
