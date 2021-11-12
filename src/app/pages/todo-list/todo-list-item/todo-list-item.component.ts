import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'pages-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  //pode ser undefined ou taks ?
  @Input() task?: Task;
  @Input() taskId?: number; //pega o valor do id do task index
  @Output() warnTaskAsDone: EventEmitter<any> = new EventEmitter(); //porta de saida avisa a task pai que ela foi alterada
  @ViewChild('checkboxInput') checkboxInput?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(): string {
    switch(this.task?.priority){

    case "Low":
    return 'bg-yellow';

    case "Medium":
    return 'bg-orange';

    case "High":
    return 'bg-red';

    default:
      return 'white';
  }
  }

  markAsDone(event: MatCheckboxChange) {
   console.log(event)
   this.warnTaskAsDone.emit({id: this.taskId, value: event.checked});
  }
}
