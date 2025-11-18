import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteslistDashComponent } from './noteslist-dash.component';

describe('NoteslistDashComponent', () => {
  let component: NoteslistDashComponent;
  let fixture: ComponentFixture<NoteslistDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteslistDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteslistDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
