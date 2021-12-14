import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TermometerComponent } from './termometer/termometer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ApiService } from '../services/api.service';
import { AdmtempComponent } from './admtemp/admtemp.component';
import { GraficopageComponent } from './graficopage/graficopage.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    PagesComponent,
    TermometerComponent,
    AdmtempComponent,
    GraficopageComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [
    ApiService
  ]
})
export class PagesModule { }
