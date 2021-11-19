import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {

  tasksList$?: Observable<Task[]>;
  sub?: Subscription;
  tasksList: Task[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {

    this.tasksList$?.subscribe({
      next: () => console.log("Acessei o dado!"),
      error: (error) => console.log(error),
      complete: () => console.log("Acesso finalizado!")
    }, );
  }

 markTaskAsDone(obj: {id:number; value: boolean;}){
  /*   console.log(obj);
     let id = obj.id;
     const done =obj.value;
     this.tasksList$?[id].done = done;
     console.log(this.tasksList$[id].done)
     */
 }

 ngOnDestroy(): void {
   this.sub?.unsubscribe();
 }
}
