import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IATrainRoutingModule } from './iatrain-routing.module';
import { IaTrainComponent } from './ia-train/ia-train.component';


@NgModule({
  declarations: [
    IaTrainComponent
  ],
  imports: [
    CommonModule,
    IATrainRoutingModule
  ]
})
export class IaTrainModule { }
