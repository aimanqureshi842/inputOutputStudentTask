import { Component, OnInit, ViewChild } from '@angular/core';
import { Istudents } from '../../models/studentsInterface';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { Istudent } from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild('stdForm') stdForm!:NgForm
  isInEditMode:boolean=false;
  Edit_Id!:string
students:Array<Istudents>=[
  {
fname:"Aiman",
lname:"Q",
email:"aimanq@gmail.com",
contact:1234556778,
age:23,
stdId:"123"
  }
]
  constructor(private _uuid:UuidService,
    private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
  }
onStdAdd(){
  if(this.stdForm.valid){
    let stdObj={
      ...this.stdForm.value,
           stdId:this._uuid.Uuid()
    }
    this.students.unshift(stdObj);
    this.stdForm.reset();
     this._snackBar.openSnackBar('New student added successfully !')
  }
}
onStdRemove(stdObj:Istudents){
  let getConfirmation=confirm('Are you sure you want to remove this student ?')
  if(getConfirmation){
    let getIndex=this.students.findIndex(std=>std.stdId===stdObj.stdId)
    this.students.splice(getIndex,1)
  }
}
onStdEdit(std:Istudents){
  this.isInEditMode=true;
  this.Edit_Id=std.stdId;
  localStorage.setItem("Edit_Id",this.Edit_Id);
  this.stdForm.form.patchValue(std)
}
onStdUpdate(){
  let Updated_Id=localStorage.getItem("Edit_Id")
  if(this.stdForm.valid && Updated_Id){
    let updatedObj={
      ...this.stdForm.value,
      stdId:Updated_Id
    }
    let getIndex=this.students.findIndex(std=>std.stdId===Updated_Id)
    this.students[getIndex]=updatedObj;
    this.stdForm.reset();
    this.isInEditMode=false;
    this.Edit_Id=''
    this._snackBar.openSnackBar('This student updated successfully !')
  }
}
}
