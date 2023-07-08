import { SessionService } from './session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private readonly dominio = 'localhost';
  private readonly porta = 8081;
  token : string = "";
  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.token = this.sessionService.get('access_token');
   }

  schedule(data: any) {

    const recurso = '/analysis/schedule';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.post<any>(url, data).pipe(
      first(),
      catchError(error => {
        console.error('Erro:', error);
        return throwError(() => 'Ocorreu um erro na requisição.');
      })
    );
  }

  listShedule() {

    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    const recurso = '/analysis/schedule/list';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get<any>(url, {headers}).pipe(
      first(),
      catchError(error => {
        return [];
      })
    );
  }
}
