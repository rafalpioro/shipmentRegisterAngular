import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedShipmentComponent } from './deactivated-shipment.component';

describe('DeactivatedShipmentComponent', () => {
  let component: DeactivatedShipmentComponent;
  let fixture: ComponentFixture<DeactivatedShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivatedShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
