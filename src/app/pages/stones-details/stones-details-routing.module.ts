import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StonesDetailsPage } from './stones-details.page';

const routes: Routes = [
  {
    path: '',
    component: StonesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StonesDetailsPageRoutingModule {}
