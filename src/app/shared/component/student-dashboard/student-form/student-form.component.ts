import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() editStd!:Istudent
  @Output() updatedObj:EventEmitter<Istudent>=new EventEmitter<Istudent>()
stdForm!:FormGroup;
isInEditMode:boolean=false;
@Output() stdObj:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  constructor() { }

  ngOnInit(): void {
    this.studentForm();
    // console.log(this.editStd)
    
  }
    Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };

  ngOnChanges():void{
    if(this.editStd){
    this.isInEditMode=true
     let Edit_Id=this.editStd.stdId
    // console.log(Edit_Id)
    localStorage.setItem("Edit_Id",Edit_Id)
    this.stdForm.patchValue(this.editStd)
  } 
}

 studentForm() {
this.stdForm=new FormGroup({
  fullName:new FormControl(null,[Validators.required]),
  age:new FormControl(null,[Validators.required]),
  gender:new FormControl(null,[Validators.required]),
  department:new FormControl(null,[Validators.required])
})
 }
onStdSub(){
  if(this.stdForm.valid){
  let stdObj={...this.stdForm.value,stdId:this.Uuid()};
  console.log(stdObj)
  this.stdObj.emit(stdObj);
  this.stdForm.reset()
  }else{
    alert('first fill the form with valid info !')
  }
}
onStdUpdate(){
  let Update_Id=localStorage.getItem("Edit_Id");
  localStorage.removeItem("Edit_id")
  if(this.stdForm.valid && Update_Id){
    this.isInEditMode=false;
    let updatedObj={...this.stdForm.value,stdId:Update_Id};
    this.updatedObj.emit(updatedObj)
    this.stdForm.reset();
  }else{
    alert('pls fill all the input first !!')
  }
 }
onStdCancel(){
  this.isInEditMode=false;
  this.stdForm.reset()
}

}
