import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncotermComponent } from './add-incoterm.component';

describe('AddIncotermComponent', () => {
  let component: AddIncotermComponent;
  let fixture: ComponentFixture<AddIncotermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncotermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncotermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
