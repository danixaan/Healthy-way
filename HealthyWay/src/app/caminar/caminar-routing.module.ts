import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminarPage } from './caminar.page';

const routes: Routes = [
  {
    path: '',
    component: CaminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminarPageRoutingModule {}
