import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicios1Page } from './ejercicios1.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicios1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicios1PageRoutingModule {}
