import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todos';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
 todos:Array<Itodos> = [
  { id: "t1", todoItem: "Buy groceries" },
  { id: "t2", todoItem: "Finish homework" },
  { id: "t3", todoItem: "Clean the house" },
  { id: "t4", todoItem: "Prepare for meeting" },
  { id: "t5", todoItem: "Pay electricity bill" }
];

  constructor(private _snackBarService:SnackbarService) { }

  ngOnInit(): void {
  }
onTodoAdd(todoObj:Itodos){
  this.todos.push(todoObj)
  this._snackBarService.openSnackBar(`Todo item added successfully !`)
}
}
