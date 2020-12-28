import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSizeComponent } from './front-size.component';

describe('FrontSizeComponent', () => {
  let component: FrontSizeComponent;
  let fixture: ComponentFixture<FrontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSizeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

