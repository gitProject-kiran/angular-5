import { TestBed, inject } from '@angular/core/testing';

import { SharedDataModuleService } from './shared-data-module.service';

describe('SharedDataModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataModuleService]
    });
  });

  it('should be created', inject([SharedDataModuleService], (service: SharedDataModuleService) => {
    expect(service).toBeTruthy();
  }));
});
