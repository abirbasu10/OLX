import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementManagmentComponent } from './advertisement-managment.component';

describe('AdvertisementManagmentComponent', () => {
  let component: AdvertisementManagmentComponent;
  let fixture: ComponentFixture<AdvertisementManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
