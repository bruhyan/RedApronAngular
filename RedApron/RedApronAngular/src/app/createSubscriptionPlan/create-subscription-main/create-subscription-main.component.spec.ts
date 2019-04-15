import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubscriptionMainComponent } from './create-subscription-main.component';

describe('CreateSubscriptionMainComponent', () => {
  let component: CreateSubscriptionMainComponent;
  let fixture: ComponentFixture<CreateSubscriptionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubscriptionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubscriptionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
