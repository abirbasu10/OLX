import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsProfileComponent } from './logistics-profile.component';

describe('LogisticsProfileComponent', () => {
  let component: LogisticsProfileComponent;
  let fixture: ComponentFixture<LogisticsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
