import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulateDataRoutingModule } from './populate-data-routing.module';
import { PopulateDataComponent } from './populate-data/populate-data.component';


@NgModule({
  declarations: [
    PopulateDataComponent
  ],
  imports: [
    CommonModule,
    PopulateDataRoutingModule
  ]
})
export class PopulateDataModule { }
