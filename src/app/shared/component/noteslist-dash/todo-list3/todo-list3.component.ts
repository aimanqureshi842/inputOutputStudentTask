import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INotesInterface } from 'src/app/shared/models/todos';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-todo-list3',
  templateUrl: './todo-list3.component.html',
  styleUrls: ['./todo-list3.component.scss']
})
export class TodoList3Component implements OnInit {
@Input() noteListArr!:Array<INotesInterface>
@Output() editNote:EventEmitter<INotesInterface>=new EventEmitter<INotesInterface>()
  constructor(private _snackBar:SnackbarService) { }

  ngOnInit(): void {
  }
onRemoveNote(list:INotesInterface){
  let confirmation=confirm('Are you sure You want to remove this Note ? ')
  if(confirmation){
let getIndex=this.noteListArr.findIndex(note=>note.refId===list.refId);
this.noteListArr.splice(getIndex,1)
this._snackBar.openSnackBar('This note removed successfully !')
}
}
onNoteEdit(EditObj:INotesInterface){
this.editNote.emit(EditObj)
}
}
