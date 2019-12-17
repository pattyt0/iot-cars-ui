import { TestBed } from '@angular/core/testing';

import { ThingspeakService } from './thingspeak.service';

describe('ThingspeakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThingspeakService = TestBed.get(ThingspeakService);
    expect(service).toBeTruthy();
  });
});
