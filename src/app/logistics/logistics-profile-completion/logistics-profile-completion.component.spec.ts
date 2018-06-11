import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsProfileCompletionComponent } from './logistics-profile-completion.component';

describe('LogisticsProfileCompletionComponent', () => {
  let component: LogisticsProfileCompletionComponent;
  let fixture: ComponentFixture<LogisticsProfileCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsProfileCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsProfileCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
