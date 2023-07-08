import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAnalysisRoutingModule } from './custom-analysis-routing.module';
import { CustomAnalysisComponent } from './custom-analysis/custom-analysis.component';


@NgModule({
  declarations: [
    CustomAnalysisComponent
  ],
  imports: [
    CommonModule,
    CustomAnalysisRoutingModule
  ]
})
export class CustomAnalysisModule { }
