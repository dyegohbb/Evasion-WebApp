import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopulateDataComponent } from './populate-data/populate-data.component';

const routes: Routes = [
  { path: 'populate-data', component: PopulateDataComponent },
  { path: '', pathMatch: 'full', redirectTo: 'populate-data'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopulateDataRoutingModule { }
