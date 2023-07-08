import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { SessionService } from '../../service/session.service';
import { SheduleObject } from '../model/shedule-object';
import { AnalysisService } from './../../service/analysis.service';
import { ScheduleObjectApiRequest } from './../model/schedule-object-api-request';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-custom-analysis',
  templateUrl: './custom-analysis.component.html',
  styleUrls: ['./custom-analysis.component.css'],
})
export class CustomAnalysisComponent {
  previousButton: SafeUrl = '';
  nextButton: SafeUrl = '';
  apiData = ['a', 'b', 'c', 'd'];
  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    nav: true,
    navText: [
      '<img src="../../../assets/back.svg" width="20rem" />',
      '<img src="../../../assets/next.svg" width="20rem" />',
    ],
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  };

  scheduleObjectList: SheduleObject[] = [];

  constructor(
    private sessionService: SessionService,
    private analysisService: AnalysisService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this.previousButton =
      this.sanitizer.bypassSecurityTrustUrl('assets/back.svg');
    this.nextButton = this.sanitizer.bypassSecurityTrustUrl('assets/next.svg');
  }

  ngOnInit() {
    this.sessionService
      .checkLogin(this.sessionService.get('access_token'))
      .subscribe();
    this.analysisService
      .listShedule()
      .subscribe({ next: (body: SheduleObject[]) => this.prepareObject(body) });
    this.style();
  }

  refresh(){
    this.analysisService
      .listShedule()
      .subscribe({ next: (body: SheduleObject[]) => this.prepareObject(body) });
  }

  prepareObject(body: SheduleObject[]) {
    this.scheduleObjectList = body.map((element) => {
      if (element.deleted) {
        element.nextExecution = '-';
      } else {
        element.nextExecution = new Date(
          element.nextExecution
        ).toLocaleDateString();

        switch (element.recurrence) {
          case 'MONTHLY':
            element.recurrence = 'Mensal';
            break;
          case 'SEMESTERLY':
            element.recurrence = 'Semestral';
            break;
          case 'YEARLY':
            element.recurrence = 'Anual';
            break;
          default:
            break;
        }
      }

      return element;
    });
    this.scheduleObjectList.sort((a, b) => {
      if (a.deleted && !b.deleted) {
        return 1;
      } else if (!a.deleted && b.deleted) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  deleteSchedule(uuid: string){
    this.analysisService.deleteSchedule(uuid).subscribe({complete: () => this.refresh()})

  }

  restaureSchedule(uuid: string){
    this.analysisService.restaureSchedule(uuid).subscribe({complete: () => this.refresh()})
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreateNewScheduleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  style() {
    setInterval(() => {
      $('.owl-prev').css('background', 'white');
      $('.owl-next').css('background', 'white');
    }, 50);
  }
}

@Component({
  selector: 'create-new-schedule-dialog',
  templateUrl: 'create-new-schedule-modal.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule],
})
export class CreateNewScheduleDialog {
  schedule: ScheduleObjectApiRequest = {
    day: NaN,
    recurrence: '',
  };

  constructor(
    public dialogRef: MatDialogRef<CreateNewScheduleDialog>,
    private analysisService: AnalysisService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  newSchedule() {
    this.analysisService
      .schedule(this.schedule)
      .subscribe({
        next: (body: SheduleObject[]) => this.onNoClick(),
        error: (error) => console.log(error),
      });
    console.log('abacate');
  }
}
