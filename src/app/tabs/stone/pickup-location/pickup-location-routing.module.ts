import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupLocationPage } from './pickup-location.page';

const routes: Routes = [
  {
    path: '',
    component: PickupLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupLocationPageRoutingModule {}
