import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly dominio = '3.22.198.174';
  private readonly porta = 8081;

  constructor(private http: HttpClient, private router: Router) { }

  checkLogin(token: string, isReverse: boolean = false) {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const recurso = '/user/check';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get(url, { headers }).pipe(
      first(),
      tap(() => {
        console.log('login ok...');
        if (isReverse) {
          this.router.navigate(['/about']);
        }
      }),
      catchError(error => {
        console.log('login error...');
        this.router.navigate(['/user/login']);
        return [];
      })
    );
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    return localStorage.getItem(key) || '';
  }

  clear() {
    localStorage.clear();
  }
}
