import { TestBed } from '@angular/core/testing';

import { SubscriptionPlanService } from './subscription-plan.service';

describe('SubscriptionPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionPlanService = TestBed.get(SubscriptionPlanService);
    expect(service).toBeTruthy();
  });
});
