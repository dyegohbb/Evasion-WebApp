import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAnalysisRoutingModule } from './custom-analysis-routing.module';
import { CustomAnalysisScreenComponent } from './custom-analysis-screen/custom-analysis-screen.component';


@NgModule({
  declarations: [
    CustomAnalysisScreenComponent
  ],
  imports: [
    CommonModule,
    CustomAnalysisRoutingModule
  ]
})
export class CustomAnalysisModule { }
