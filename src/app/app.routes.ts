import { Routes } from '@angular/router';
import { LocalizedComponent } from './localized/localized.component';
import { MultilingualComponent } from './multilingual/multilingual.component';

export const routes: Routes = [
  { path: '', redirectTo: 'MultilingualComponent', pathMatch: 'full' },
  { path: 'LocalizedComponent', component: LocalizedComponent },
  { path: 'MultilingualComponent', component: MultilingualComponent }
];
