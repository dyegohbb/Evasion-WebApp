import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../service/session.service';
import { IaTrainService } from '../service/ia-train.service';
import { error } from 'jquery';

@Component({
  selector: 'app-ia-train',
  templateUrl: './ia-train.component.html',
  styleUrls: ['./ia-train.component.css']
})
export class IaTrainComponent {
  constructor(private http: HttpClient, private sessionService: SessionService, private iaTrainService: IaTrainService) { }

  ngOnInit() {
    this.sessionService
      .checkLogin(this.sessionService.get('access_token'))
      .subscribe();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.uploadFile(formData);
  }

  uploadFile(formData: FormData) {
   this.iaTrainService.upload(formData).subscribe({next: () => {console.log('Upload realizado com sucesso!')}, error: (error) => {console.log('Erro ao realizar upload! motivo: ', error)}})
  }

  train() {
    this.iaTrainService.iaTrain().subscribe({next: () => {console.log('Treinamento realizado com sucesso!')}, error: (error) => {console.log('Erro ao realizar treinamento! motivo: ', error)}})
  }
}
