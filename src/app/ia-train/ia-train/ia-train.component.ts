import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../service/session.service';
import { IaTrainService } from '../service/ia-train.service';
import { error } from 'jquery';
import { MetricsHistory } from '../model/MetricsHistory';

@Component({
  selector: 'app-ia-train',
  templateUrl: './ia-train.component.html',
  styleUrls: ['./ia-train.component.css']
})
export class IaTrainComponent {
  metricsHistory: MetricsHistory = {
    createdAt: '',
    f1Score: 0,
    recall: 0,
    kappa: 0,
    modelScore: 0
  };

  constructor(private http: HttpClient, private sessionService: SessionService, private iaTrainService: IaTrainService) { }

  ngOnInit() {
    this.sessionService
      .checkLogin(this.sessionService.get('access_token'))
      .subscribe({next: () => this.listLastMetrics()});
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

  listLastMetrics(){
    this.iaTrainService.listLastMetrics().subscribe({next: (data) => this.prepareMetricsData(data), error: (error) => {console.log('Erro ao realizar listagem! motivo: ', error)}})
  }

  prepareMetricsData(data: MetricsHistory): void {
    this.metricsHistory = data;
    this.metricsHistory.createdAt = new Date(data.createdAt).toLocaleString();
    console.log(this.metricsHistory)
  }
}
