import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoneListsPage } from './stone-lists.page';

const routes: Routes = [
  {
    path: '',
    component: StoneListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoneListsPageRoutingModule {}
