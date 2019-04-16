import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCreationComponent } from './review-creation.component';

describe('ReviewCreationComponent', () => {
  let component: ReviewCreationComponent;
  let fixture: ComponentFixture<ReviewCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
