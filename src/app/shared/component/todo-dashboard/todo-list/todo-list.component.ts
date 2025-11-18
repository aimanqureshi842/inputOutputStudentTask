import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from 'src/app/shared/models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() todosArr!:Itodos[]
  constructor() { }

  ngOnInit(): void {
  }

}
