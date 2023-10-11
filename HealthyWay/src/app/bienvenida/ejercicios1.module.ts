import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicios1PageRoutingModule } from './ejercicios1-routing.module';

import { Ejercicios1Page } from './ejercicios1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicios1PageRoutingModule
  ],
  declarations: [Ejercicios1Page]
})
export class Ejercicios1PageModule {}
