import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsChangePasswordComponent } from './logistics-change-password.component';

describe('LogisticsChangePasswordComponent', () => {
  let component: LogisticsChangePasswordComponent;
  let fixture: ComponentFixture<LogisticsChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
