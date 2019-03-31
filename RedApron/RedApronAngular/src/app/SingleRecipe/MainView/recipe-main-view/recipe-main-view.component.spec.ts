import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMainViewComponent } from './recipe-main-view.component';

describe('RecipeMainViewComponent', () => {
  let component: RecipeMainViewComponent;
  let fixture: ComponentFixture<RecipeMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
