import { TestBed } from '@angular/core/testing';

import { PropownerService } from './propowner.service';

describe('PropownerService', () => {
  let service: PropownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
