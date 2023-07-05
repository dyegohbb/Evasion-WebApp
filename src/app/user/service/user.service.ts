import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { AuthApiResponseObject } from '../model/auth-api-response-object';
import { UserLoginObject } from '../model/user-login-object';
import { UserObject } from '../model/user-object';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly dominio = 'localhost';
  private readonly porta = 8081;

  constructor(private http: HttpClient) { }

  login(data: UserLoginObject) {

    const recurso = '/user/login';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post<AuthApiResponseObject>(url, data).pipe(
      first(),
      catchError(error => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  checkLogin() {

    const recurso = '/user/check';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get(url).pipe(
      first(),
      catchError(error => {
        return [];
      })
    );
  }

  register(data: UserObject) {

    let headers = new HttpHeaders({
      Authorization: `Bearer `
    });

    const recurso = '/user/register';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post<AuthApiResponseObject>(url, data, { headers }).pipe(
      first(),
      catchError(error => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }
}
