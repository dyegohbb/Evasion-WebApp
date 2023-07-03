import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserLoginObject } from '../../model/user-login-object';
import { UserServiceService } from '../../service/user-service.service';

import * as $ from 'jquery';
import { UserObject } from '../../model/user-object';

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

  constructor(private router: Router, private userService: UserServiceService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    // Código jQuery aqui
    $(document).ready(function() {
      $('.toggle-form').click(function(e) {
        e.preventDefault();
        $('.form').toggleClass('show');
        $('.form form').slideToggle(1000);
      });
    });
  }

  toggleRegisterForm() {
    this.toggleForm = !this.toggleForm;
    console.log(this.toggleForm);
  }

  onLogin() {
    this.userService.login(this.loginForm).subscribe({
      next: (v) => {
        this.error = false;
        this.snackBar.open('Login efetuado com sucesso', 'Fechar', {
          duration: 2000,
          verticalPosition: 'top'
        });

        setTimeout(() => {
          this.router.navigate(['/about']);
        }, 1000);
      },
      error: (e) => {
        this.error = true;
        console.error('Erro na requisição de login:', e);
      }
    });
  }

  onRegister() {
    this.userService.register(this.registerForm).subscribe({
      next: (v) => {
        this.error = false;
        console.log('Registro realizado com sucesso:', v);
        this.snackBar.open('Login efetuado com sucesso', 'Fechar', {
          duration: 2000,
          verticalPosition: 'top'
        });

        setTimeout(() => {
          this.router.navigate(['/about']);
        }, 2000);
      },
      error: (e) => {
        this.error = true;
        console.error('Erro na requisição de registro:', e);
      }
    });
  }
}
