import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastAnalysisRoutingModule } from './fast-analysis-routing.module';
import { FastAnalysisScreenComponent } from './fast-analysis-screen/fast-analysis-screen.component';


@NgModule({
  declarations: [
    FastAnalysisScreenComponent
  ],
  imports: [
    CommonModule,
    FastAnalysisRoutingModule
  ]
})
export class FastAnalysisModule { }
