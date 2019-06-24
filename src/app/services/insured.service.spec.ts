import { TestBed } from '@angular/core/testing';

import { InsuredService } from './insured.service';

describe('InsuredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsuredService = TestBed.get(InsuredService);
    expect(service).toBeTruthy();
  });
});
