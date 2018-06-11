import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyAdsComponent } from './company-my-ads.component';

describe('CompanyMyAdsComponent', () => {
  let component: CompanyMyAdsComponent;
  let fixture: ComponentFixture<CompanyMyAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMyAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
