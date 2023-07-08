import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CustomAnalysisRoutingModule } from './custom-analysis-routing.module';
import { CustomAnalysisComponent } from './custom-analysis/custom-analysis.component';
import{FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CustomAnalysisComponent,
    ],
  imports: [
    CommonModule,
    CustomAnalysisRoutingModule,
    CarouselModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class CustomAnalysisModule { }
