import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutScreenComponent } from './about-screen/about-screen.component';

const routes: Routes = [
  { path: '', component: AboutScreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }