import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShipmentsComponent } from './user-shipments.component';

describe('UserShipmentsComponent', () => {
  let component: UserShipmentsComponent;
  let fixture: ComponentFixture<UserShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
