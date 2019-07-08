import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierTypeComponent } from './carrier-type.component';

describe('CarrierTypeComponent', () => {
  let component: CarrierTypeComponent;
  let fixture: ComponentFixture<CarrierTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
