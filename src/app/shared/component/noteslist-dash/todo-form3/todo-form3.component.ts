import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INotesInterface } from 'src/app/shared/models/todos';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form3',
  templateUrl: './todo-form3.component.html',
  styleUrls: ['./todo-form3.component.scss']
})
export class TodoForm3Component implements OnInit, OnChanges {
  isInEditMode:boolean=false;
@ViewChild('todoForm') todoForm!:NgForm
@Output() newNoteAdd:EventEmitter<INotesInterface>=new EventEmitter<INotesInterface>();
@Output() updatedNote:EventEmitter<INotesInterface>=new EventEmitter<INotesInterface>()
@Input() editNote!:INotesInterface
  constructor(private _uuid:UuidService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges):void{
    if(this.editNote){
      // let Edit_Id=this.editNote.refId;
      // localStorage.setItem("Edit_Id",Edit_Id)
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
// let Updated_Id=localStorage.getItem("Edit_Id");
if( this.todoForm.valid){
  this.isInEditMode=false
  let updated_Obj={
    ...this.todoForm.value,
    refId:this.editNote.refId
  }
this.updatedNote.emit(updated_Obj)
this.todoForm.reset()
}
}
onUpdateCancel(){
  this.isInEditMode=false;
  this.todoForm.reset()

}
onReset(){
  this.todoForm.reset()
}
}
