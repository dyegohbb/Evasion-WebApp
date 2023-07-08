import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IaTrainComponent } from './ia-train/ia-train.component';

const routes: Routes = [
  { path: 'ia-train', component: IaTrainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'ia-train'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IATrainRoutingModule { }
