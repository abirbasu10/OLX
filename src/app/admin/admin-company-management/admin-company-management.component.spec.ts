import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyManagementComponent } from './admin-company-management.component';

describe('AdminCompanyManagementComponent', () => {
  let component: AdminCompanyManagementComponent;
  let fixture: ComponentFixture<AdminCompanyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
