import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserLoginObject } from '../../model/user-login-object';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: UserLoginObject = { login: '', password: '' };
  error: boolean = false;

  constructor(private router: Router, private userService: UserServiceService, private snackBar: MatSnackBar) {}

  onSubmit() {
    this.userService.login(this.loginForm).subscribe({
      next: (v) => {
        this.error = false;
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
        console.error('Erro na requisição de login:', e);
      }
    });
  }
}
