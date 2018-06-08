import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySellerMessageListComponent } from './company-seller-message-list.component';

describe('CompanySellerMessageListComponent', () => {
  let component: CompanySellerMessageListComponent;
  let fixture: ComponentFixture<CompanySellerMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySellerMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySellerMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
