import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

import { SessionService } from '../../service/session.service';
import { MetricsHistory } from '../model/MetricsHistory';
import { IaTrainService } from '../service/ia-train.service';

@Component({
  selector: 'app-ia-train',
  templateUrl: './ia-train.component.html',
  styleUrls: ['./ia-train.component.css']
})
export class IaTrainComponent {
  metricsHistory: MetricsHistory = {
    accuracy: 0,
    createdAt: '',
    f1Score: 0,
    recall: 0,
    kappa: 0,
    modelScore: 0
  };

  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public accuracyChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [{ data: [1, 0], label: ' Porcentagem' }];
  public f1ChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [{ data: [1, 0], label: ' Porcentagem' }];
  public highScoreChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [{ data: [1, 0], label: ' Porcentagem' }];
  public kappaChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [{ data: [1, 0], label: ' Porcentagem' }];
  public recallChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [{ data: [1, 0], label: ' Porcentagem', backgroundColor: ['#000', "#fff"] }];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor(private sessionService: SessionService, private iaTrainService: IaTrainService) { }

  ngOnInit() {
    this.sessionService
      .checkLogin(this.sessionService.get('access_token'))
      .subscribe({ next: () => this.listLastMetrics() });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.uploadFile(formData);
  }

  uploadFile(formData: FormData) {
    this.iaTrainService.upload(formData).subscribe({ next: () => { console.log('Upload realizado com sucesso!') }, error: (error) => { console.log('Erro ao realizar upload! motivo: ', error) } })
  }

  train() {
    this.iaTrainService.iaTrain().subscribe({ next: () => { console.log('Treinamento realizado com sucesso!') }, error: (error) => { console.log('Erro ao realizar treinamento! motivo: ', error) } })
  }

  listLastMetrics() {
    this.iaTrainService.listLastMetrics().subscribe({ next: (data) => this.prepareMetricsData(data), error: (error) => { console.log('Erro ao realizar listagem! motivo: ', error) } })
  }

  prepareMetricsData(data: MetricsHistory): void {
    let text = "Treino foi realizado no dia "
    this.metricsHistory = data;
    let dateFormated = new Date(data.createdAt).toLocaleString().split(", ")
      .join(" às ")
      .replace(":", "h");;

    this.metricsHistory.createdAt = text.concat(dateFormated);

    let acc = this.metricsHistory.accuracy * 100;
    let f1 = this.metricsHistory.f1Score * 100;
    let highScore = this.metricsHistory.modelScore * 100;
    let recall = this.metricsHistory.recall * 100;
    let kappa = (this.metricsHistory.kappa + 1) * 50;
    kappa =  Number(kappa.toFixed(2));

    this.accuracyChartDatasets = [{ data: [100 - acc, acc], label: ' Porcentagem', backgroundColor: ['#f2f2f2', "#3dd15db0"] }]
    this.highScoreChartDatasets = [{ data: [100 - highScore, highScore], label: ' Porcentagem', backgroundColor: ['#f2f2f2', "#3dd15db0"] }]
    this.f1ChartDatasets = [{ data: [100 - f1, f1], label: ' Porcentagem', backgroundColor: ['#f2f2f2', "#3dd15db0"] }]
    this.recallChartDatasets = [{ data: [100 - recall, recall], label: ' Porcentagem', backgroundColor: ['#f2f2f2', "#3dd15db0"] }]
    this.kappaChartDatasets = [{ data: [100 - kappa, kappa], label: ' Porcentagem', backgroundColor: ['#f2f2f2', "#3dd15db0"] }]
  }
}
