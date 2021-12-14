import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorComponent } from './sensor/sensor.component';
import { ControltempComponent } from './controltemp/controltemp.component';
import { PanelComponent } from './panel/panel.component';
import { GraficoComponent } from './grafico/grafico.component';
import { TableregComponent } from './tablereg/tablereg.component';



@NgModule({
  declarations: [
    SensorComponent,
    ControltempComponent,
    PanelComponent,
    GraficoComponent,
    TableregComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SensorComponent,
    ControltempComponent,
    PanelComponent,
    TableregComponent,
    GraficoComponent
  ]
})
export class ComponentsModule { }
