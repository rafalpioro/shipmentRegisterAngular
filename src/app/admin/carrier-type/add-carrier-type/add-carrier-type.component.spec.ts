import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrierTypeComponent } from './add-carrier-type.component';

describe('AddCarrierTypeComponent', () => {
  let component: AddCarrierTypeComponent;
  let fixture: ComponentFixture<AddCarrierTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrierTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarrierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
