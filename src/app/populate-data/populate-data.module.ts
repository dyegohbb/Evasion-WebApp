import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulateDataRoutingModule } from './populate-data-routing.module';
import { PopulateDataScreenComponent } from './populate-data-screen/populate-data-screen.component';


@NgModule({
  declarations: [
    PopulateDataScreenComponent
  ],
  imports: [
    CommonModule,
    PopulateDataRoutingModule
  ]
})
export class PopulateDataModule { }
