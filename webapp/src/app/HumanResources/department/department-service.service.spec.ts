import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './department-service.service';

describe('DepartmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentService = TestBed.get(DepartmentService);
    expect(service).toBeTruthy();
  });
});
