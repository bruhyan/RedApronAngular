import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMainContentComponent } from './recipe-main-content.component';

describe('RecipeMainContentComponent', () => {
  let component: RecipeMainContentComponent;
  let fixture: ComponentFixture<RecipeMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
