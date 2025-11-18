import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INotesInterface } from 'src/app/shared/models/todos';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form3',
  templateUrl: './todo-form3.component.html',
  styleUrls: ['./todo-form3.component.scss']
})
export class TodoForm3Component implements OnInit {
  isInEditMode:boolean=false
@ViewChild('todoForm') todoForm!:NgForm
@Output() newNoteAdd:EventEmitter<INotesInterface>=new EventEmitter<INotesInterface>();
@Output() updatedNote:EventEmitter<INotesInterface>=new EventEmitter<INotesInterface>()
@Input() editNote!:INotesInterface
  constructor(private _uuid:UuidService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    if(this.editNote){
      let Edit_Id=this.editNote.refId;
      localStorage.setItem("Edit_Id",Edit_Id)
      this.todoForm.setValue({note:this.editNote.note})
      this.isInEditMode=true;

    }
  }
onNoteAdd(){
  if(this.todoForm.valid){
  let newNoteObj={
    ...this.todoForm.value,
    refId:this._uuid.Uuid()
  }
this.newNoteAdd.emit(newNoteObj)
this.todoForm.reset()
}else{
  alert('Add todo first ')
}
}
onUpdateNote(){
let Updated_Id=localStorage.getItem("Edit_Id");
if(Updated_Id && this.todoForm.valid){
  this.isInEditMode=false
  let updated_Obj={
    ...this.todoForm.value,
    refId:Updated_Id
  }
this.updatedNote.emit(updated_Obj)
this.todoForm.reset()
}
}
onUpdateCancel(){
  this.isInEditMode=false;
  this.todoForm.reset()
}
}
