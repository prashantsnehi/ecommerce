import { TestBed } from '@angular/core/testing';

import { FastagCrudService } from './fastag-crud.service';

describe('FastagCrudService', () => {
  let service: FastagCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastagCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
