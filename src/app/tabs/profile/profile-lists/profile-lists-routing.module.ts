import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileListsPage } from './profile-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileListsPageRoutingModule {}
