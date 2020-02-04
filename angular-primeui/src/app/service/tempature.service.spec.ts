import { TestBed } from '@angular/core/testing';

import { TempatureService } from './tempature.service';

describe('TempatureService', () => {
  let service: TempatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
