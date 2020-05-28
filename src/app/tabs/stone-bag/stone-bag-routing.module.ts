import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoneBagPage } from './stone-bag.page';

const routes: Routes = [
  {
    path: '',
    component: StoneBagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoneBagPageRoutingModule {}
