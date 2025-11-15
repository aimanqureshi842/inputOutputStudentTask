import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/shared/models/student';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  Edit_Id!:string
@Input() stdArr!:Istudent[]
@Output() editStd:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  constructor(private _snackBar:SnackbarService) { }

  ngOnInit(): void {
  }
onStdRemove(stdObj:Istudent){
let getConfirmation=confirm('Are you sure you want to remove this student !')
if(getConfirmation){
  let getIndex=this.stdArr.findIndex(std=>std.stdId===stdObj.stdId)
  this.stdArr.splice(getIndex,1);
  this._snackBar.openSnackBar('Student removed successfully !')
  
}
}
onStdEdit(std:Istudent){
// this.Edit_Id=std.stdId
// localStorage.setItem("Edit_Id", Edit_Id)
this.editStd.emit(std)

}
}

