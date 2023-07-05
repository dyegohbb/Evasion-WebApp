import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, first, tap } from 'rxjs/operators';

import { SessionServiceService } from '../../service/session-service.service';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent {

  private readonly dominio = 'localhost';
  private readonly porta = 8081;
  private token : string = "";

  constructor(private sessionService: SessionServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log('AboutScreenComponent');
    console.log(this.sessionService.get('access_token'))
    this.token = this.sessionService.get('access_token');
    this.checkLogin().subscribe();
  }

  checkLogin() {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const recurso = '/user/check';
    const url = `http://${this.dominio}:${this.porta}${recurso}`;

    return this.http.get(url, { headers }).pipe(
      first(),
      tap(() => {
        console.log('ok');
      }),
      catchError(error => {
        console.log('Erro:');
        this.router.navigate(['/user/login']);
        return [];
      })
    );
  }
}
