import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAdComponent } from './place-ad.component';

describe('PlaceAdComponent', () => {
  let component: PlaceAdComponent;
  let fixture: ComponentFixture<PlaceAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
