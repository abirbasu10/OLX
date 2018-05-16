import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsSidebarComponent } from './logistics-sidebar.component';

describe('LogisticsSidebarComponent', () => {
  let component: LogisticsSidebarComponent;
  let fixture: ComponentFixture<LogisticsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
