import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsMessageDetailsComponent } from './logistics-message-details.component';

describe('LogisticsMessageDetailsComponent', () => {
  let component: LogisticsMessageDetailsComponent;
  let fixture: ComponentFixture<LogisticsMessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsMessageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
