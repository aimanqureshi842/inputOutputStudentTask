import { Component, OnInit } from '@angular/core';
import { ITask } from '../../models/todos';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
 taskLists:Array<ITask>= [
  { uid: "u1", task: "Wash clothes" },
  { uid: "u2", task: "Study JavaScript" },
  { uid: "u3", task: "Go for a walk" },
  { uid: "u4", task: "Book doctor appointment" },
  { uid: "u5", task: "Organize desk" }
];

  constructor(private _snackBar:SnackbarService) { }

  ngOnInit(): void {
  }
onTaskAdd(taskObj:ITask){
this.taskLists.push(taskObj);
this._snackBar.openSnackBar('Todo Item added successfully !')
}
}
