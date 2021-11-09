import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class PagesModule { }
