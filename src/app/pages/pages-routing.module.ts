import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TermometerComponent } from './termometer/termometer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'termometer', component: TermometerComponent},
      {path: '**', redirectTo: 'termometer'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
