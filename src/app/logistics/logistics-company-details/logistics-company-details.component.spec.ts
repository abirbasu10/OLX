import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsCompanyDetailsComponent } from './logistics-company-details.component';

describe('LogisticsCompanyDetailsComponent', () => {
  let component: LogisticsCompanyDetailsComponent;
  let fixture: ComponentFixture<LogisticsCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
