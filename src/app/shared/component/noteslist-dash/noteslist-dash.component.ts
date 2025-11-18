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
this.notesList.push(newNote);
this._snackBar.openSnackBar('New note added successFully !')
}
onEdit(list:INotesInterface){
this.editList=list
}
onupdateNote(updatedObj:INotesInterface){
let getIndex=this.notesList.findIndex(list=>list.refId===updatedObj.refId);
this.notesList[getIndex]=updatedObj;
this._snackBar.openSnackBar('Note updated successfully !')
}
}
