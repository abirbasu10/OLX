import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySellerMessageDetailsComponent } from './company-seller-message-details.component';

describe('CompanySellerMessageDetailsComponent', () => {
  let component: CompanySellerMessageDetailsComponent;
  let fixture: ComponentFixture<CompanySellerMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySellerMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySellerMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
