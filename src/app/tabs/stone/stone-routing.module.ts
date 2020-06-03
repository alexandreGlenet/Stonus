import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StonePage } from './stone.page';

const routes: Routes = [
  {
    path: '',
    component: StonePage
  },
  {
    path: 'stone-lists',
    loadChildren: () => import('./stone-lists/stone-lists.module').then( m => m.StoneListsPageModule)
  },
  {
    path: 'stones/:id',
    loadChildren: () => import('./stone-details/stone-details.module').then( m => m.StoneDetailsPageModule)
  },
  {
    path: 'pickup-location',
    loadChildren: () => import('./pickup-location/pickup-location.module').then( m => m.PickupLocationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StonePageRoutingModule {}
