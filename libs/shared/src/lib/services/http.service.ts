import { LocalStorageService } from './local-storage.service';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from '../../../../../apps/contacts-app/src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  baseURL: string;
  headers: HttpHeaders;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.baseURL = environment.base_url;
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseURL}/${url}`);
  }

  post<T>(
    url: string,
    data: any,
    shouldSendToken: boolean = true
  ): Observable<T> {
    return this.httpClient.post<T>(`${this.baseURL}/${url}`, data, {
      headers: shouldSendToken ? this.headers : null
    });
  }

  put<T>(
    url: string,
    data: any,
    shouldSendToken: boolean = true
  ): Observable<T> {
    return this.httpClient.put<T>(`${this.baseURL}/${url}`, data, {
      headers: shouldSendToken ? this.headers : null
    });
  }
  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseURL}/${url}`, {
      headers: this.headers
    });
  }
}
