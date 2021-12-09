import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Temperatura } from "../models/temperatura";

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  private dbPath = '/temperature';
  temperaturaRef: AngularFireObject<Temperatura>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.temperaturaRef = db.object(this.dbPath);
  }

  getAll(): AngularFireObject<Temperatura>{
    return this.temperaturaRef;
  }

}
