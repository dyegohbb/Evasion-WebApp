import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CustomAnalysisRoutingModule } from './custom-analysis-routing.module';
import { CustomAnalysisComponent } from './custom-analysis/custom-analysis.component';


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
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class CustomAnalysisModule { }
