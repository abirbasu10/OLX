import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsPromoteComponent } from './logistics-promote.component';

describe('LogisticsPromoteComponent', () => {
  let component: LogisticsPromoteComponent;
  let fixture: ComponentFixture<LogisticsPromoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsPromoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsPromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
