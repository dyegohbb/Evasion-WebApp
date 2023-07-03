import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserObject } from '../../model/user-object';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm: UserObject = { login: '', password: '', name: '', email: '' };
  error: boolean = false;

  constructor(private router: Router, private userService: UserServiceService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.userService.register(this.loginForm).subscribe({
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
