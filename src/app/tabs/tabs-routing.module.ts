import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'stone',
        loadChildren: () => import('./stone/stone.module').then(m => m.StonePageModule)
      }, 
      {
        path: 'stone-bag',
        loadChildren: () => import('./stone-bag/stone-bag.module').then(m => m.StoneBagPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '', // redirection pour les cas ou places/tabs
        redirectTo: 'tabs/stone',
        pathMatch: 'full'
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
