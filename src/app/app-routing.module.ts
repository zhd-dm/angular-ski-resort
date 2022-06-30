import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiPassComponent } from './models/components/ski-pass/ski-pass.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SkiPassComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
