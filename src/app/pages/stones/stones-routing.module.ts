import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StonesPage } from './stones.page';

const routes: Routes = [
  {
    path: '',
    component: StonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StonesPageRoutingModule {}
