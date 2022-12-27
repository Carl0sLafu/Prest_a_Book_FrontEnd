import { TestBed } from '@angular/core/testing';

import { WroteService } from './wrote.service';

describe('WroteService', () => {
  let service: WroteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WroteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
