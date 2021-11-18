import { Injectable } from '@angular/core';
import { TaskPriority } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTask() {

    return  [
      {
      title: "Assistir a aula do curso Santander Coders",
      description: "devo reassistir a última aula de angular para revisar o conteúdo",
      dueDate: new Date,
      priority: TaskPriority.Low,
      labels: [],
      done: false,
    },
    {
      title: "Fazer a Atividade 05  da Forca 2.0",
      description: "Devo reunir com meu grupo,  implementar e testar o tranalho",
      dueDate: new Date,
      priority: TaskPriority.High,
      labels: [],
      done: false,
    },
    ];

  }
}
function timeout(arg0: number) {
  throw new Error('Function not implemented.');
}

