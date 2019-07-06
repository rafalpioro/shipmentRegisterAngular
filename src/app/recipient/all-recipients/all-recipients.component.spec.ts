import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipentsComponent } from './all-recipients.component';

describe('AllRecipentsComponent', () => {
  let component: AllRecipentsComponent;
  let fixture: ComponentFixture<AllRecipentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecipentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
