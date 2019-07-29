import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncotermComponent } from './edit-incoterm.component';

describe('EditIncotermComponent', () => {
  let component: EditIncotermComponent;
  let fixture: ComponentFixture<EditIncotermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIncotermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncotermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
