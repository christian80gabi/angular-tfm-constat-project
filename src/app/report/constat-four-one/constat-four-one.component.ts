import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../services/report.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-constat-four-one',
  templateUrl: './constat-four-one.component.html',
  styleUrls: ['./constat-four-one.component.scss']
})
export class ConstatFourOneComponent implements OnInit {

  id_miss_report = 0;

  constructor(
    private router: Router,
    private reportService: ReportService
  ) { }

  ngOnInit() {
  }

  onNext(form: NgForm) {
    if (confirm('Y\'a t\'il de témoin(s) ?')) {
      this.router.navigate(['/constat', 'five']);
    } else {
      this.reportService.setWitnesses(this.id_miss_report);
      this.router.navigate(['/constat', 'six']);
      console.log('Witnesses are setting as null...');
    }
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }

}
