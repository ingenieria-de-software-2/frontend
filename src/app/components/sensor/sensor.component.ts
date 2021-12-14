import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from "../../services/temperatura.service";
import { Temperatura } from "../../models/temperatura";
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { data } from '../../models/data';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  temperaturaFire?: any;
  temperaturaCorp?: number;
  fireSubscription?: Subscription;

  diagnostico?: string;
  textClass?: string;

  public codigouser: string = "";

  constructor(
    private temperatureService: TemperaturaService,
    private apiService: ApiService
  ) { 
  }

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
      this.temperaturaFire = data.payload.toJSON();
      /* if((Math.floor(this.temperatura) > 35 && Math.floor(this.temperatura) < 42)){
        this.temperaturaCorp = Math.floor(this.temperatura);
      } */
      this.temperaturaCorp = Math.floor(this.temperaturaFire);
      this.obtenerDiagnostico(this.temperaturaCorp);
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

  registrarTemperatura(codigousuario: string){
    const fechaActual = new Date().toLocaleDateString();
    const codigoApi = parseInt(codigousuario);
    const datos: data = {
      temperatura: this.temperaturaCorp,
      fecha: fechaActual,
      codigo: codigoApi
    };

    this.apiService.registrarTemp(datos).subscribe((res: any) => {
      console.log(res);
    });

    this.apiService.wsocketTemperature(datos);
  }

  

}
