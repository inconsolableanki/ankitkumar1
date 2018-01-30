import { TestBed, inject } from '@angular/core/testing';

import { HearderService } from './hearder.service';

describe('HearderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HearderService]
    });
  });

  it('should be created', inject([HearderService], (service: HearderService) => {
    expect(service).toBeTruthy();
  }));
});
