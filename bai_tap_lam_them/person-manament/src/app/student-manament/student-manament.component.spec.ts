import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManamentComponent } from './student-manament.component';

describe('StudentManamentComponent', () => {
  let component: StudentManamentComponent;
  let fixture: ComponentFixture<StudentManamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
