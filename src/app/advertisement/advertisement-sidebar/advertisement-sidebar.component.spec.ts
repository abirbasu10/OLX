import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementSidebarComponent } from './advertisement-sidebar.component';

describe('AdvertisementSidebarComponent', () => {
  let component: AdvertisementSidebarComponent;
  let fixture: ComponentFixture<AdvertisementSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
