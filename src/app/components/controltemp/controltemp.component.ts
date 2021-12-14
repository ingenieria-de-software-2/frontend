import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-controltemp',
  templateUrl: './controltemp.component.html',
  styleUrls: ['./controltemp.component.css']
})
export class ControltempComponent implements OnInit, OnDestroy {

  wsSubscription?: Subscription;
  dataTemp: any = {
    temperatura: 0,
    fecha: "14/12/2021",
    codigo: 0
  };

  diagnostico?: string;
  textClass?: string;

  constructor(
    private wsocket: WebsocketService,
    private apiService: ApiService
  ) { }

  ngOnDestroy(): void {
    this.wsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.wsgetdata();
    
  }

  wsgetdata(){
    this.wsSubscription = this.apiService.wsocketgettemp().subscribe(data => {
      this.dataTemp = data;
      this.obtenerDiagnostico(this.dataTemp.temperatura);
      console.log(this.dataTemp);
    });

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
