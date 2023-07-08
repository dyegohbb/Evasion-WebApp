import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import{IaTrainService} from './service/ia-train.service';
import{NgChartsModule} from 'ng2-charts';

import { IaTrainComponent } from './ia-train/ia-train.component';
import { IATrainRoutingModule } from './iatrain-routing.module';


@NgModule({
  declarations: [
    IaTrainComponent
  ],
  imports: [
    CommonModule,
    IATrainRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    NgChartsModule
  ],
  providers: [IaTrainService]
})
export class IaTrainModule { }
