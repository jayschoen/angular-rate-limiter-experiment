import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, of, tap, throwError } from 'rxjs';

const MAX_REQUESTS_PER_SECOND = 1;

@Injectable()
export class LimiterInterceptor implements HttpInterceptor {

  private requests: number = 0;
  private lastRequest = 0;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const now = Date.now();

    if ((now - this.lastRequest) < (1000 / MAX_REQUESTS_PER_SECOND)) {
      this.requests++;

      if (this.requests > MAX_REQUESTS_PER_SECOND) {
        console.error('Request limit exceeded');
        return of();//.pipe(delay(1000));
      }
    } else {
      this.requests = 1;
    }

    this.lastRequest = now;

    return next.handle(request).pipe(
      tap(() => {
        console.log('Request sent successfully')
      })
    );
  }
}
