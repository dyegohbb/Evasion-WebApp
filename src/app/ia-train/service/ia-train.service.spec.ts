import { TestBed } from '@angular/core/testing';

import { IaTrainService } from './ia-train.service';

describe('IaTrainService', () => {
  let service: IaTrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaTrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
