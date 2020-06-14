import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    public localStorageService: LocalStorageService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.get('access-token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 400) {
              this.snackbar.showSnackbar(
                'Invalid request, please try again',
                'ok',
                5000,
                'red_snackbar'
              );
            } else if (err.status === 401) {
              this.snackbar.showSnackbar(
                'Session expired, Please login again',
                'ok',
                5000,
                'red_snackbar'
              );
              this.router.navigate(['/auth/login']);
            } else if (err.status === 403) {
              this.snackbar.showSnackbar(
                'Forbidden Resource access.',
                'Close',
                5000,
                'red_snackbar'
              );
            } else {
              return;
            }
          }
        }
      )
    );
  }
}
