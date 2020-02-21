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
  name = 'millie';
  age: number;
  adress: {
    street: string,
    city: string
  };
  hobbies: string [];

  constructor() {
    this.age = 16;
    this.adress = {
      street: 'hollywood',
      city: 'california'
    };
    this.hobbies = ['sing', 'dance', 'performance'];
   }

  ngOnInit(): void {
  }

}
