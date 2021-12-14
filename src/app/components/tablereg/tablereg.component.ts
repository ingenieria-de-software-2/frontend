import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tablereg',
  templateUrl: './tablereg.component.html',
  styleUrls: ['./tablereg.component.css']
})
export class TableregComponent implements OnInit, OnDestroy {

  dataSubscription?: Subscription;
  datos: any = [];

  constructor(
    private apiServ: ApiService
  ) { }

  ngOnInit(): void {
    this.getdata();
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }


  getdata(){
    this.dataSubscription = this.apiServ.getdata().subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    });
  }
}
