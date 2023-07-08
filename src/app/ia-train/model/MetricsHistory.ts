export interface MetricsHistory {
  createdAt: string;
  accuracy: number;
  f1Score: number;
  recall: number;
  kappa: number;
  modelScore: number;
}
