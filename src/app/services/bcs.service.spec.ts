import { TestBed, inject } from '@angular/core/testing';

import { BcsService } from './bcs.service';

describe('BcsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BcsService]
    });
  });

  it('should be created', inject([BcsService], (service: BcsService) => {
    expect(service).toBeTruthy();
  }));
});
