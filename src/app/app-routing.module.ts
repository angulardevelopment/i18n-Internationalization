import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizedComponent } from './localized/localized.component';

const routes: Routes = [{path: 'tes', component: LocalizedComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
