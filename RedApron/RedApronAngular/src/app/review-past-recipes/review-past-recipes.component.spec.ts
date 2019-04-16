import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPastRecipesComponent } from './review-past-recipes.component';

describe('ReviewPastRecipesComponent', () => {
  let component: ReviewPastRecipesComponent;
  let fixture: ComponentFixture<ReviewPastRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPastRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPastRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
