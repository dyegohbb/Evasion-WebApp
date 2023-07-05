import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { SessionService } from '../../../service/session.service';
import { AuthApiResponseObject } from '../../model/auth-api-response-object';
import { UserLoginObject } from '../../model/user-login-object';
import { UserObject } from '../../model/user-object';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: UserLoginObject = { login: '', password: '' };
  registerForm: UserObject = { name: '', login: '', password: '', email: '' };
  error: boolean = false;
  toggleForm: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.sessionService.checkLogin(this.sessionService.get('access_token'), true).subscribe();
    $(function() {
      $(document).on('click', '.toggle-form', function(e) {
        e.preventDefault();
        $('.form').toggleClass('show');
        $('.form form').slideToggle(1000);
      });
    });
  }

  toggleRegisterForm() {
    this.toggleForm = !this.toggleForm;
  }

  onLogin() {
    this.userService.login(this.loginForm).subscribe({
      next: (response: AuthApiResponseObject) => {
        this.error = false;
        this.snackBar.open('Login efetuado com sucesso!', 'Fechar', {
          duration: 2000,
          verticalPosition: 'top',
        });

        this.updateSession(response);
        setTimeout(() => {
          this.router.navigate(['/about']);
        }, 1000);
      },
      error: (e) => {
        this.error = true;
        console.error('Erro na requisição de login:', e);
      },
    });
  }

  onRegister() {
    this.userService.register(this.registerForm).subscribe({
      next: (response: AuthApiResponseObject) => {
        this.error = false;
        this.snackBar.open('Registro efetuado com sucesso!', 'Fechar', {
          duration: 2000,
          verticalPosition: 'top',
        });

        this.updateSession(response);
        setTimeout(() => {
          this.router.navigate(['/about']);
        }, 2000);
      },
      error: (e) => {
        this.error = true;
        console.error('Erro na requisição de registro:', e);
      },
    });
  }

  private updateSession(response: AuthApiResponseObject) {
    this.sessionService.set('access_token', response.access_token);
    this.sessionService.set('name', response.name);
  }
}
