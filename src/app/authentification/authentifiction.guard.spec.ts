import { TestBed } from '@angular/core/testing';

import { AuthentifictionGuard } from './authentifiction.guard';

describe('AuthentifictionGuard', () => {
  let guard: AuthentifictionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentifictionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
