import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm3Component } from './todo-form3.component';

describe('TodoForm3Component', () => {
  let component: TodoForm3Component;
  let fixture: ComponentFixture<TodoForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoForm3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
