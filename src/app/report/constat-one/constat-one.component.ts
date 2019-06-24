import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'app-constat-one',
  templateUrl: './constat-one.component.html',
  styleUrls: ['./constat-one.component.scss']
})
export class ConstatOneComponent implements OnInit {

  constructor(
    private router: Router,
    private constatService: ReportService
  ) { }

  ngOnInit() {
  }

  onOne () {
    this.constatService.setNumVeh(1);
    this.router.navigate(['/constat', 'two']);
    console.log('NumVeh = ', this.constatService.numVeh);
  }

  onTwo () {
    this.constatService.setNumVeh(2);
    this.router.navigate(['/constat', 'two']);
    console.log('NumVeh = ', this.constatService.numVeh);
  }

  onMore () {
    this.constatService.setNumVeh(3);
    this.router.navigate(['/constat', 'two']);
    console.log('NumVeh = ', this.constatService.numVeh);
  }

}
