import { StudentAnalysisHistory } from './../model/StudentAnalysisHistory';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SafeUrl } from '@angular/platform-browser';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { SessionService } from '../../service/session.service';
import { SheduleObject } from '../model/shedule-object';
import { AnalysisService } from './../../service/analysis.service';
import { ScheduleObjectApiRequest } from './../model/schedule-object-api-request';
import {StudentAnalysisHistoryResponseObject} from './../model/StudentAnalysisHistoryResponseObject';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];



@Component({
  selector: 'app-custom-analysis',
  templateUrl: './custom-analysis.component.html',
  styleUrls: ['./custom-analysis.component.css'],
})
export class CustomAnalysisComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'date', 'situation'];
  dataSource: MatTableDataSource<StudentAnalysisHistory>;
  studentAnalysisHistory: StudentAnalysisHistory[] = [{id: '-', name: '-', date: '-', situation: '-'}]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  previousButton: SafeUrl = '';
  nextButton: SafeUrl = '';
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
        items: 1,
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
    public dialog: MatDialog
  ) {

    const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.studentAnalysisHistory);

    this.dataSource = new MatTableDataSource(this.studentAnalysisHistory);
    this.analysisService.listStudentAnalisysHistory().subscribe({next: async (response) => {
      await this.prepareStudentAnalysisHistory(response);
      this.dataSource = new MatTableDataSource(this.studentAnalysisHistory);
    }});
  }

   createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
   }

  async prepareStudentAnalysisHistory(objList: StudentAnalysisHistoryResponseObject[]){
    this.studentAnalysisHistory = objList.map((element) => {
      let obj: StudentAnalysisHistory = {
        id: element.studentId,
        name: element.name,
        date: new Date(
          element.analysisDate
        ).toLocaleDateString(),
        situation: element.situation ? "Em risco" : "Regular"
      };
      return obj;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
    console.log(uuid)
    this.analysisService.restaureSchedule(uuid).subscribe({complete: () => this.refresh()})
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(CreateNewScheduleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
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
