import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  paises: string[] = ['chile', 'argentina', 'bolivia', 'peru'];

  constructor() { }

  alerting() {
    alert('hola');

  }

  addContrie(newContrie) {
    // envio del valor del input
    this.paises.push(newContrie.value);

    // evitar que recarge la pagina
    return false;

  }

  deleteContries(pais){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.paises.length; i++) {
      if (pais === this.paises[i]) {
        this.paises.splice(i, 1);

      }

    }

  }

  ngOnInit(): void {
  }

}
