import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { Iemployee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @ViewChild('employeeForm') employeeForm!: NgForm
  isInEditMode: boolean = false;
  @Output() newEmpl: EventEmitter<Iemployee> = new EventEmitter<Iemployee>()
  @Output() updatedObj: EventEmitter<Iemployee> = new EventEmitter<Iemployee>()
  @Input() editObj!: Iemployee
  constructor(private _uuid: UuidService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if (changes['editObj'].currentValue) {
      this.isInEditMode = true;
      this.employeeForm.form.patchValue(changes['editObj'].currentValue);
    }
  }
  onemplAdd() {
    if (this.employeeForm.valid) {
      let newEmp = {
        ...this.employeeForm.value,
        id: this._uuid.Uuid()
      }
      this.employeeForm.reset()
      this.newEmpl.emit(newEmp);

    } else {
      alert('Fill the form first !')
    }
  }
  onEmpUpdate() {
    // this.editObj.id='';
    if (this.employeeForm.valid) {
      let updatedObj = {
        ...this.employeeForm.value,
        id: this.editObj.id
      }
      this.isInEditMode=false;
      this.employeeForm.reset();
      this.updatedObj.emit(updatedObj)
    }
  }
}
