import { TestBed } from '@angular/core/testing';

import { LimiterInterceptor } from './limiter.interceptor';

describe('LimiterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LimiterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LimiterInterceptor = TestBed.inject(LimiterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
