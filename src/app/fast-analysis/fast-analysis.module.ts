import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FastAnalysisRoutingModule } from './fast-analysis-routing.module';
import { FastAnalysisComponent } from './fast-analysis/fast-analysis.component';


@NgModule({
  declarations: [
    FastAnalysisComponent
  ],
  imports: [
    CommonModule,
    FastAnalysisRoutingModule
  ]
})
export class FastAnalysisModule { }
