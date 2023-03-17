import { TestBed } from '@angular/core/testing';

import { ProductRoutesGuard } from './product-routes.guard';

describe('ProductRoutesGuard', () => {
  let guard: ProductRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
