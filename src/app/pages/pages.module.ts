import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TodoListComponent
  ]
})
export class PagesModule { }
