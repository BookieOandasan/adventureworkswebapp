import { TestBed } from '@angular/core/testing';

import { EnvironmentConfigService } from './environment-config-service.service';

describe('EnvironmentConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentConfigService = TestBed.get(EnvironmentConfigService);
    expect(service).toBeTruthy();
  });
});
