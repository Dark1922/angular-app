import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasksList: Task[] = [];

  //acessa os serviões aos service
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.tasksList = this.todoListService.getTask();
  }
 markTaskAsDone(obj: {id:number; value: boolean;}){
     console.log(obj);
     let id = obj.id;
     const done =obj.value;
     this.tasksList[id].done = done;
     console.log(this.tasksList[id].done)
 }
}
