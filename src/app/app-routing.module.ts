import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizedComponent } from './localized/localized.component';
import { MultilingualComponent } from './multilingual/multilingual.component';

const routes: Routes = [{path: 'LocalizedComponent', component: LocalizedComponent},
  {path: 'MultilingualComponent', component: MultilingualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
