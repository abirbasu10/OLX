import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsRequestListComponent } from './logistics-request-list.component';

describe('LogisticsRequestListComponent', () => {
  let component: LogisticsRequestListComponent;
  let fixture: ComponentFixture<LogisticsRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
