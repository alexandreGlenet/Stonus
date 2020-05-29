import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoneDetailsPage } from './stone-details.page';

const routes: Routes = [
  {
    path: '',
    component: StoneDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoneDetailsPageRoutingModule {}
