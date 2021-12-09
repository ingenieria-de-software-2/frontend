import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from "../../services/temperatura.service";
import { Temperatura } from "../../models/temperatura";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  temperatura?: any;
  temperaturaCorp?: number;
  fireSubscription?: Subscription;

  diagnostico?: string;
  textClass?: string;

  constructor(
    private temperatureService: TemperaturaService
  ) { }

  ngOnInit(): void {
    this.obtenerTemp();
  }

  ngOnDestroy(): void {
    this.fireSubscription?.unsubscribe();
  }

  obtenerTemp(): void{
    this.fireSubscription = this.temperatureService
    .getAll()
    .snapshotChanges()
    .subscribe((data) => {
      this.temperatura = data.payload.toJSON();
      /* if((Math.floor(this.temperatura) > 35 && Math.floor(this.temperatura) < 42)){
        this.temperaturaCorp = Math.floor(this.temperatura);
      } */
      this.temperaturaCorp = Math.floor(this.temperatura);
      this.obtenerDiagnostico(this.temperaturaCorp);
      console.log(this.temperaturaCorp);
    })
  }

  obtenerDiagnostico(temperatura: number): void{
    if(temperatura == 35 || temperatura == 36){
      this.diagnostico = "Normal";
      this.textClass = "text-success";
    }else if(temperatura == 37){
      this.diagnostico = "Media";
      this.textClass = "text-warning";
    }else if(temperatura >= 38){
      this.diagnostico = "Elevado";
      this.textClass = "text-danger";
    }
  }

}
