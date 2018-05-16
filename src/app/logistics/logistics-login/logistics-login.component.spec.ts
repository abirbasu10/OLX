import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsLoginComponent } from './logistics-login.component';

describe('LogisticsLoginComponent', () => {
  let component: LogisticsLoginComponent;
  let fixture: ComponentFixture<LogisticsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
