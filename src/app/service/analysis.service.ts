import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { ScheduleObjectApiRequest } from '../custom-analysis/model/schedule-object-api-request';
import { SessionService } from './session.service';
import { StudentAnalysisHistoryResponseObject } from '../custom-analysis/model/StudentAnalysisHistoryResponseObject'

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  private readonly dominio = 'localhost';
  private readonly porta = 8081;


  constructor(private http: HttpClient, private sessionService: SessionService) { }

  schedule(data: ScheduleObjectApiRequest) {

    let token = this.sessionService.get('access_token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/schedule';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post<any>(url, data, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  listShedule() {

    let token = this.sessionService.get('access_token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/schedule/list';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get<any>(url, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }
  deleteSchedule(uuid: String) {
    let token = this.sessionService.get('access_token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/schedule/delete';
    const url = `http://${this.dominio}:${this.porta}${recurso}/${uuid}`;

    return this.http.delete(url, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  restaureSchedule(uuid: String) {
    let token = this.sessionService.get('access_token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/schedule/restaure';
    const url = `http://${this.dominio}:${this.porta}${recurso}/${uuid}`;

    console.log(url)
    return this.http.post(url, {}, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  listStudentAnalisysHistory() {

    let token = this.sessionService.get('access_token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const recurso = '/analysis/student/history';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get<StudentAnalysisHistoryResponseObject[]>(url, { headers }).pipe(
      first(),
      catchError((error) => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }
}
