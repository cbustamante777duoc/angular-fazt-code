import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  paises: string[] = ['chile', 'argentina', 'bolivia', 'peru'];
  name:string = 'chloe moretz';
  age:number = 23;
  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  alerting() {
    alert('hola');

  }

  addContrie(newContrie) {
    // envio del valor del input
    this.paises.push(newContrie.value);
    // limpia el input
    newContrie.value = '';
    newContrie.focus();

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
