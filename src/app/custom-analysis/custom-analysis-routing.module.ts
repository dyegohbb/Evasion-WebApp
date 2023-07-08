import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomAnalysisComponent } from './custom-analysis/custom-analysis.component';

const routes: Routes = [
  { path: 'custom-analysis', component: CustomAnalysisComponent },
  { path: '', pathMatch: 'full', redirectTo: 'custom-analysis'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomAnalysisRoutingModule { }
