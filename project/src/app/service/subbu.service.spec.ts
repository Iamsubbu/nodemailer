import { TestBed } from '@angular/core/testing';

import { SubbuService } from './subbu.service';

describe('SubbuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubbuService = TestBed.get(SubbuService);
    expect(service).toBeTruthy();
  });
});
