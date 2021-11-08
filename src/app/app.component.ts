import { Component } from '@angular/core';

@Component({ //decorator tudo que tem um @ e suas url de html e css
  selector: 'app-root', //seletor da página como se fosse uma tag html nova
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
}
