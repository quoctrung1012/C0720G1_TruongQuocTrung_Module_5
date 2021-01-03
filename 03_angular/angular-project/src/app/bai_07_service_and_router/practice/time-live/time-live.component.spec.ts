import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLiveComponent } from './time-live.component';

describe('TimeLiveComponent', () => {
  let component: TimeLiveComponent;
  let fixture: ComponentFixture<TimeLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
