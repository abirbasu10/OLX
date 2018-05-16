import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsRegisterComponent } from './logistics-register.component';

describe('LogisticsRegisterComponent', () => {
  let component: LogisticsRegisterComponent;
  let fixture: ComponentFixture<LogisticsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
