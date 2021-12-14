import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirigirgraf(){
    this.router.navigate(['/sw2/grafica']);
  }

  redirigirreg(){
    this.router.navigate(['/sw2/registros']);
  }

}
