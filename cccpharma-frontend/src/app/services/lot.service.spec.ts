import { TestBed } from '@angular/core/testing';

import { LotService } from './lot.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotService = TestBed.get(LotService);
    expect(service).toBeTruthy();
  });
});
