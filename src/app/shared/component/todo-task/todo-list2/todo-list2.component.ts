import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/models/todos';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.scss']
})
export class TodoList2Component implements OnInit {
@Input() taskList!:Array<ITask>
  constructor() { }

  ngOnInit(): void {
  }

}
