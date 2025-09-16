import { TestBed } from '@angular/core/testing';

import { ServiceBase } from './service-base.service';

describe('ServiceBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBase = TestBed.get(ServiceBase);
    expect(service).toBeTruthy();
  });
});
