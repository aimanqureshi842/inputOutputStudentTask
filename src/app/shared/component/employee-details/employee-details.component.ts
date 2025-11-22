import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iemployee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() employeeArr:Array<Iemployee>=[]
@Output() empId:EventEmitter<string>=new EventEmitter<string>()
@Output() editObj:EventEmitter<Iemployee>=new EventEmitter<Iemployee>()
// Edit_Id!:string
  constructor() { }

  ngOnInit(): void {
  }
onEmpRemove(id:string){
this.empId.emit(id)
}
onEmpEdit(empObj:Iemployee){
  // this.Edit_Id=empObj.id
  this.editObj.emit(empObj)
}
}
