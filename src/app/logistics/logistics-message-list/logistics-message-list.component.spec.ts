import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsMessageListComponent } from './logistics-message-list.component';

describe('LogisticsMessageListComponent', () => {
  let component: LogisticsMessageListComponent;
  let fixture: ComponentFixture<LogisticsMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
