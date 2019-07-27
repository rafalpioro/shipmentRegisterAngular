import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarrierTypeComponent } from './edit-carrier-type.component';

describe('EditCarrierTypeComponent', () => {
  let component: EditCarrierTypeComponent;
  let fixture: ComponentFixture<EditCarrierTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarrierTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarrierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
