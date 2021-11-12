import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority } from 'src/app/models/task.model';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasksList: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasksList = [
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
