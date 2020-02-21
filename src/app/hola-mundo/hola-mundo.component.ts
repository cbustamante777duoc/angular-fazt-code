import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  titulo = 'segundo componente';
  users = ['lalisa', 'jennie kim', 'rose', 'jisoo'];
  activated = true;

  constructor() { }

  ngOnInit(): void {
  }

}
