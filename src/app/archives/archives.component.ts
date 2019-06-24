import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Report} from '../models/report.model';
import {ReportService} from '../services/report.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit, OnDestroy {

  reportSubscription: Subscription;
  reports: Report[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.getConstat();
    console.log('On getting all reports');
  }

  getConstat() {
    this.reportSubscription = this.reportService.reportsSubject.subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      }
    );
    this.reportService.emitReport();
  }

  ngOnDestroy(): void {
    this.reportSubscription.unsubscribe();
    console.log('On Destroying');
  }

}
