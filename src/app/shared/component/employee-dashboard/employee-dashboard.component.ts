import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../../models/employee';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  editedObj!:Iemployee;
  employees: Iemployee[] = [
    { id: "e101", name: "Aman Sharma", age: 28, department: "IT" },
    { id: "e102", name: "Priya Verma", age: 25, department: "HR" },
    { id: "e103", name: "Rohit Singh", age: 30, department: "Finance" },
    { id: "e104", name: "Neha Gupta", age: 27, department: "Marketing" },
    { id: "e105", name: "Karan Patel", age: 32, department: "Operations" }
  ];

  constructor(private _snackBar: SnackbarService) { }

  ngOnInit(): void {
  }
  onEmpAdd(newEmp: Iemployee) {
    this.employees.unshift(newEmp);
    this._snackBar.openSnackBar('New employee addedd !')
  }
  onEmpRemove(EmpId: string) {
    let getConfirmation = confirm('Are you sure you want to remove this employee ?')
    if (getConfirmation) {
      let getIndex = this.employees.findIndex(emp => emp.id === EmpId);
      this.employees.splice(getIndex, 1);
      this._snackBar.openSnackBar('This employee is removed !')
    }
  }
  onEmpEdit(editObj:Iemployee){
this.editedObj={...editObj}
  }
  onEmpUpdate(updateObj:Iemployee){
    let getIndex=this.employees.findIndex(emp=>emp.id===updateObj.id);
    this.employees[getIndex]=updateObj;
    this._snackBar.openSnackBar('This employee updated !')
  }
}
