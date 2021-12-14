import { Injectable } from '@angular/core';
import { data } from "../models/data";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlLocal = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private wsServices: WebsocketService
  ) { }

  registrarTemp(temperatura: data){
    return this.http.post(`${this.urlLocal}/newdata`, temperatura).pipe(catchError(error => {
      return throwError(error);
    }));
  }

  wsocketTemperature(data: any){
    this.wsServices.emit('emite-temp', data);
  }

  wsocketgettemp(){
    return this.wsServices.listen('obtiene-temp');
  }

  getdata(){
    return this.http.get(`${this.urlLocal}/datauser`).pipe(catchError(error => {
      return throwError(error);
    }));
  }
}
