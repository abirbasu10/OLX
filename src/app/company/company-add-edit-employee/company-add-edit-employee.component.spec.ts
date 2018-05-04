import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddEditEmployeeComponent } from './company-add-edit-employee.component';

describe('CompanyAddEditEmployeeComponent', () => {
  let component: CompanyAddEditEmployeeComponent;
  let fixture: ComponentFixture<CompanyAddEditEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddEditEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
