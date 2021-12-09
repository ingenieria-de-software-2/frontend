import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorComponent } from './sensor/sensor.component';



@NgModule({
  declarations: [
    SensorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SensorComponent
  ]
})
export class ComponentsModule { }
