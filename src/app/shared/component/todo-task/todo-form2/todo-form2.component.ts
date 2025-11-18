import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITask } from 'src/app/shared/models/todos';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form2',
  templateUrl: './todo-form2.component.html',
  styleUrls: ['./todo-form2.component.scss']
})
export class TodoForm2Component implements OnInit {
@ViewChild('todoForm') todoForm!:NgForm
@Output() taskObj:EventEmitter<ITask>=new EventEmitter<ITask>()
  constructor(private _uuid:UuidService) { }

  ngOnInit(): void {
  }
onTaskSubmit(){
  if(this.todoForm.valid){
let taskObj={
  ...this.todoForm.value,
  uid:this._uuid.Uuid()
}
this.taskObj.emit(taskObj)
this.todoForm.reset()
}
}
}
