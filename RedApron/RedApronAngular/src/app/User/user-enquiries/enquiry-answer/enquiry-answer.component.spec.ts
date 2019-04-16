import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryAnswerComponent } from './enquiry-answer.component';

describe('EnquiryAnswerComponent', () => {
  let component: EnquiryAnswerComponent;
  let fixture: ComponentFixture<EnquiryAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
