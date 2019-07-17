import { TestBed } from '@angular/core/testing';

import { TransactionTypeApiService } from './transaction-type-api.service';

describe('TransactionTypeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionTypeApiService = TestBed.get(TransactionTypeApiService);
    expect(service).toBeTruthy();
  });
});
