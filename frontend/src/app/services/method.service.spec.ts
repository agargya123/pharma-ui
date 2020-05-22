import { TestBed } from '@angular/core/testing';

import { MethodService } from './method.service';

describe('MethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethodService = TestBed.get(MethodService);
    expect(service).toBeTruthy();
  });
});
