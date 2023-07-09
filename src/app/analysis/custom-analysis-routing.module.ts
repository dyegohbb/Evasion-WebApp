import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  { path: 'custom-analysis', component: AnalysisComponent },
  { path: '', pathMatch: 'full', redirectTo: 'custom-analysis'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomAnalysisRoutingModule { }
