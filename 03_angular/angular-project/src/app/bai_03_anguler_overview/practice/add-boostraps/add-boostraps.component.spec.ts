import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoostrapsComponent } from './add-boostraps.component';

describe('AddBoostrapsComponent', () => {
  let component: AddBoostrapsComponent;
  let fixture: ComponentFixture<AddBoostrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoostrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoostrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
