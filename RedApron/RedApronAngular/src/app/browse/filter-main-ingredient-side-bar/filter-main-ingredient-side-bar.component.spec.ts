import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMainIngredientSideBarComponent } from './filter-main-ingredient-side-bar.component';

describe('FilterMainIngredientSideBarComponent', () => {
  let component: FilterMainIngredientSideBarComponent;
  let fixture: ComponentFixture<FilterMainIngredientSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMainIngredientSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMainIngredientSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
