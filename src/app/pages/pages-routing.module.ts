import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TermometerComponent } from './termometer/termometer.component';
import { AdmtempComponent } from './admtemp/admtemp.component';
import { GraficopageComponent } from './graficopage/graficopage.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'termometer', component: TermometerComponent},
      {path:'admin', component: AdmtempComponent},
      {path:'grafica', component: GraficopageComponent},
      {path:'registros', component: TablaComponent},
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
