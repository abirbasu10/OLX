import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMessageListComponent } from './company-message-list.component';

describe('CompanyMessageListComponent', () => {
  let component: CompanyMessageListComponent;
  let fixture: ComponentFixture<CompanyMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
