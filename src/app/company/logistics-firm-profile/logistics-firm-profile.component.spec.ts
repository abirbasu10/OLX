import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsFirmProfileComponent } from './logistics-firm-profile.component';

describe('LogisticsFirmProfileComponent', () => {
  let component: LogisticsFirmProfileComponent;
  let fixture: ComponentFixture<LogisticsFirmProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsFirmProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsFirmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
