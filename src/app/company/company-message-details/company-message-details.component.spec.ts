import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMessageDetailsComponent } from './company-message-details.component';

describe('CompanyMessageDetailsComponent', () => {
  let component: CompanyMessageDetailsComponent;
  let fixture: ComponentFixture<CompanyMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
