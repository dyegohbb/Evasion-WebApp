import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IATrainRoutingModule } from './iatrain-routing.module';
import { IaTrainScreenComponent } from './ia-train-screen/ia-train-screen.component';


@NgModule({
  declarations: [
    IaTrainScreenComponent
  ],
  imports: [
    CommonModule,
    IATrainRoutingModule
  ]
})
export class IaTrainModule { }
