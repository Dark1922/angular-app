import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TaskPriority } from './../models/task.model';
import { Observable } from 'rxjs';

@Injectable()
export class TodoListService {

  constructor(private http: HttpClient) {
    console.log("Serviço todo-list instanciado!");
  }

  getTasks(): Observable<Task[]> {
    const URL = 'http://madsti.com.br:9099/todos';
     const options = {
       headers: {
         Authorization: "Basic " + btoa("admin:password")
       }
     };
     return this.http.get(URL, options);

  }
}
