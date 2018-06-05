import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideQuotationComponent } from './provide-quotation.component';

describe('ProvideQuotationComponent', () => {
  let component: ProvideQuotationComponent;
  let fixture: ComponentFixture<ProvideQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
