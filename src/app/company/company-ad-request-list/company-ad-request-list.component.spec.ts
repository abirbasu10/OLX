import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdRequestListComponent } from './company-ad-request-list.component';

describe('CompanyAdRequestListComponent', () => {
  let component: CompanyAdRequestListComponent;
  let fixture: ComponentFixture<CompanyAdRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
