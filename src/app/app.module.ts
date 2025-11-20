import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './shared/component/student-dashboard/student-table/student-table.component';
import { StudentFormComponent } from './shared/component/student-dashboard/student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-dashboard/todo-list/todo-list.component';
import { TodoTaskComponent } from './shared/component/todo-task/todo-task.component';
import { TodoList2Component } from './shared/component/todo-task/todo-list2/todo-list2.component';
import { TodoForm2Component } from './shared/component/todo-task/todo-form2/todo-form2.component';
import { NoteslistDashComponent } from './shared/component/noteslist-dash/noteslist-dash.component';
import { TodoList3Component } from './shared/component/noteslist-dash/todo-list3/todo-list3.component';
import { TodoForm3Component } from './shared/component/noteslist-dash/todo-form3/todo-form3.component';
import { TestComponent } from './shared/component/test/test.component';
import { StudentsComponent } from './shared/component/students/students.component';
import { TodosComponent } from './shared/component/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTaskComponent,
    TodoList2Component,
    TodoForm2Component,
    NoteslistDashComponent,
    TodoList3Component,
    TodoForm3Component,
    TestComponent,
    StudentsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
