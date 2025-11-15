import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
editStudent!:Istudent
 students:Istudent[]= [
  {
    stdId: '101',
    fullName: "Aman Sharma",
    age: 28,
    gender: "Male",
    department: "Engineering"
  },
  {
    stdId: '102',
    fullName: "Priya Verma",
    age: 24,
    gender: "Female",
    department: "Human Resources"
  },
  {
    stdId: '103',
    fullName: "Rahul Mehta",
    age: 30,
    gender: "Male",
    department: "Finance"
  },
  {
    stdId: '104',
    fullName: "Sonia Kapoor",
    age: 27,
    gender: "Female",
    department: "Marketing"
  },
  {
    stdId: '105',
    fullName: "Vikas Rao",
    age: 35,
    gender: "Male",
    department: "Sales"
  }
];

  constructor(private _snackBar:SnackbarService) { }

  ngOnInit(): void {
  }
onstdAdd(std:Istudent){
this.students.push(std);
this._snackBar.openSnackBar('Student added successfully !')
}
onStdEdit(stdEdit:Istudent){
this.editStudent=stdEdit
}
onUpdateStd(updatedObj:Istudent){
  let getIndex=this.students.findIndex(std=>std.stdId===updatedObj.stdId)
  this.students[getIndex]=updatedObj;
this._snackBar.openSnackBar('Student updated successfully !')
}
}
