import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about'  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'ia-train', loadChildren: () => import('./ia-train/ia-train.module').then(m => m.IaTrainModule) },
  { path: 'fast-analysis', loadChildren: () => import('./fast-analysis/fast-analysis.module').then(m => m.FastAnalysisModule) },
  { path: 'custom-analysis', loadChildren: () => import('./custom-analysis/custom-analysis.module').then(m => m.CustomAnalysisModule) },
  { path: 'populate-data', loadChildren: () => import('./populate-data/populate-data.module').then(m => m.PopulateDataModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
