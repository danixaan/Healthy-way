import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminarPageRoutingModule } from './caminar-routing.module';

import { CaminarPage } from './caminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminarPageRoutingModule
  ],
  declarations: [CaminarPage]
})
export class CaminarPageModule {}
