import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnquiriesComponent } from './user-enquiries.component';

describe('UserEnquiriesComponent', () => {
  let component: UserEnquiriesComponent;
  let fixture: ComponentFixture<UserEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
