import { TestBed } from '@angular/core/testing';

import { TimeBombService } from './time-bomb-service';

describe('TimeBombService', () => {
  let service: TimeBombService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBombService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
