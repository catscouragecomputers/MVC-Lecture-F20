import { TestBed } from '@angular/core/testing';

import { PlanetModelService } from './planet-model.service';

describe('PlanetModelService', () => {
  let service: PlanetModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
