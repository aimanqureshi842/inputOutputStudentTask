import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from 'src/app/shared/models/todos';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
   @Output()  todoObj:EventEmitter<Itodos>=new EventEmitter<Itodos>()
@ViewChild('todoForm') todoForm!:NgForm
  constructor(private _uuid:UuidService) { }

  ngOnInit(): void {
  }
                
onTodoAdd(){
  if(this.todoForm.valid){
  let todoObj={
    ...this.todoForm.value,
    id:this._uuid.Uuid()
  }
this.todoObj.emit(todoObj)
  this.todoForm.reset();
}else{
  alert('Add todo first !')
}
}
}
