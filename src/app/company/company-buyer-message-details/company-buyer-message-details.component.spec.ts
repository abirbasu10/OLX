import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBuyerMessageDetailsComponent } from './company-buyer-message-details.component';

describe('CompanyBuyerMessageDetailsComponent', () => {
  let component: CompanyBuyerMessageDetailsComponent;
  let fixture: ComponentFixture<CompanyBuyerMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBuyerMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBuyerMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
