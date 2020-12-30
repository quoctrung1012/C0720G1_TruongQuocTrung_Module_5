import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewV2Component } from './hacker-new-v2.component';

describe('HackerNewV2Component', () => {
  let component: HackerNewV2Component;
  let fixture: ComponentFixture<HackerNewV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
