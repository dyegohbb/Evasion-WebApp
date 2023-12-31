import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { SessionService } from '../../service/session.service';
import { MetricsHistory } from '../model/MetricsHistory';

@Injectable({
  providedIn: 'root'
})
export class IaTrainService {
  private readonly dominio = '3.22.198.174';
  private readonly porta = 8081;

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  upload(data: FormData) {

    let token = this.sessionService.get('access_token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/student/data/import';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post(url, data, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  iaTrain() {

    let token = this.sessionService.get('access_token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/ia/train';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post(url, {}, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  listLastMetrics() {
    let token = this.sessionService.get('access_token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/ia/train/result';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get<MetricsHistory>(url, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }
}
