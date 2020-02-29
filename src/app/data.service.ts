import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// importanto interfase
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('el servicio esta trabajando');


   }

   getData() {
     return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

   }
}
