import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FastAnalysisComponent } from './fast-analysis/fast-analysis.component';

const routes: Routes = [
  { path: 'fast-analysis', component: FastAnalysisComponent },
  { path: '', pathMatch: 'full', redirectTo: 'fast-analysis'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FastAnalysisRoutingModule { }
