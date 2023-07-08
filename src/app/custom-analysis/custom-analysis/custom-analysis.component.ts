import { Component } from '@angular/core';

import { SessionService } from '../../service/session.service';
import { SheduleObject } from '../model/shedule-object';
import { AnalysisService } from './../../service/analysis.service';

@Component({
  selector: 'app-custom-analysis',
  templateUrl: './custom-analysis.component.html',
  styleUrls: ['./custom-analysis.component.css']
})
export class CustomAnalysisComponent {

  scheduleObjectList : SheduleObject[] = [];

  constructor(private sessionService: SessionService, private analysisService: AnalysisService) { }


  ngOnInit() {
    this.sessionService.checkLogin(this.sessionService.get('access_token')).subscribe();
    this.analysisService.listShedule().subscribe({next: (body: SheduleObject[]) => this.scheduleObjectList = body});
  }
}
