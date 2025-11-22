import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todosInterface';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @ViewChild('todoForm') todoForm!: NgForm
  isInEditMode: boolean = false;
  Edit_Id!: string
  todos: Array<Itodo> = [
    // {
    //   todoItem: "Java",
    //   todoId: "123"
    // },
    // {
    //   todoItem: "Saas",
    //   todoId: "124"
    // }
  ]
  constructor(private _uuid: UuidService,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  trackById(i: number, todoObj: Itodo) {
   console.log(todoObj.todoId);
  //  return todoObj.todoId
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let todoObj = {
        ...this.todoForm.value,
        todoId: this._uuid.Uuid()
      }
      this.todos.unshift(todoObj);
      this.todoForm.reset()
      this._snackBar.openSnackBar('New todo added successfully !')
    } else {
      alert('Add todo first !')
    }
  }
  onTodoRemove(list: Itodo) {
    let getConfirmation = confirm('Are you sure you want to remove this todo !')
    if (getConfirmation) {
      let getindex = this.todos.findIndex(todo => todo.todoId === list.todoId)
      this.todos.splice(getindex, 1)
    }
    this._snackBar.openSnackBar('This todo removed successfully !')
  }
  onEditTodo(list: Itodo) {
    this.isInEditMode = true
    this.Edit_Id = list.todoId;
    localStorage.setItem("Edit_Id", this.Edit_Id)
    this.todoForm.form.patchValue(list)
  }
  onUpdateTodo() {
    let Updated_Id = localStorage.getItem("Edit_Id")
    if (this.todoForm.valid && Updated_Id) {
      let updatedObj = { ...this.todoForm.value, todoId: Updated_Id }
      let getIndex = this.todos.findIndex(todo => todo.todoId === Updated_Id)
      this.todos[getIndex] = updatedObj
      this.todoForm.reset()
      this.isInEditMode = false;
      this.Edit_Id = ''
      this._snackBar.openSnackBar('This todo updated successfully ! ')
    }
  }
}
