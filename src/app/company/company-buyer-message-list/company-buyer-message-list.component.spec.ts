import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBuyerMessageListComponent } from './company-buyer-message-list.component';

describe('CompanyBuyerMessageListComponent', () => {
  let component: CompanyBuyerMessageListComponent;
  let fixture: ComponentFixture<CompanyBuyerMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBuyerMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBuyerMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
