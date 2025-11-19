import { Component, OnInit } from '@angular/core';
import { INotesInterface } from '../../models/todos';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-noteslist-dash',
  templateUrl: './noteslist-dash.component.html',
  styleUrls: ['./noteslist-dash.component.scss']
})
export class NoteslistDashComponent implements OnInit {
editList!:INotesInterface
notesList:Array<INotesInterface> = [
  { refId: "r1", note: "Buy vegetables" },
  { refId: "r2", note: "Check emails" },
  { refId: "r3", note: "Update resume" },
  { refId: "r4", note: "Plan weekend trip" },
  { refId: "r5", note: "Water the plants" }
];

  constructor(private _snackBar:SnackbarService) { }

  ngOnInit(): void {
  }
onNewNoteAdd(newNote:INotesInterface){
// this.notesList.push(newNote);
this.notesList=[...this.notesList,newNote];
this._snackBar.openSnackBar('New note added successFully !')
}
onRemoveNote(list:INotesInterface){
  let confirmation=confirm('Are you sure you want to remove this Note ?')
  if(confirmation){
let getIndex=this.notesList.findIndex(note=>note.refId===list.refId);
this.notesList.splice(getIndex,1)
// this.notesList=this.notesList.filter(note=>note.refId!==list.refId);

this._snackBar.openSnackBar('This note removed successfully !')
  }
}
onEdit(list:INotesInterface){
this.editList={...list}
}
onupdateNote(updatedObj:INotesInterface){
let getIndex=this.notesList.findIndex(list=>list.refId===updatedObj.refId);
this.notesList[getIndex]=updatedObj;
// this.notesList=this.notesList.map(note=>
//   note.refId===updatedObj.refId ? updatedObj : note
// );
this._snackBar.openSnackBar('Note updated successfully !')
}
}
