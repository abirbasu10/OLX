import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmployeeManagementComponent } from './company-employee-management.component';

describe('CompanyEmployeeManagementComponent', () => {
  let component: CompanyEmployeeManagementComponent;
  let fixture: ComponentFixture<CompanyEmployeeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEmployeeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
