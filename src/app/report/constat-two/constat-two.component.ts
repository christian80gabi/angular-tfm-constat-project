import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../services/report.service';
import { DatePipe } from '@angular/common';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-constat-two',
  templateUrl: './constat-two.component.html',
  styleUrls: ['./constat-two.component.scss']
})
export class ConstatTwoComponent implements OnInit {

  date = new Date();

  constructor(
    private router: Router,
    private reportService: ReportService,
    private mapService: MapService
  ) { }

  static_date = this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
  static_time = this.date.getHours() + ':' + this.date.getMinutes();
  static_place = '';

  latest_date = this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
  latest_time = this.date.getHours() + ':' + this.date.getMinutes();
  latest_place = '';

  num = this.reportService.numVeh;


  ngOnInit() {
    setTimeout(
      () => {
        this.getPosition();
      }, 2000
    );
  }

  getPosition() {
    this.mapService.getPosition().then(
      (pos) => {
        this.latest_place = pos.lat + ', ' + pos.lng;
        this.static_place = pos.lat + ', ' + pos.lng;
      }
    );
  }

  onNext() {
    this.reportService.setTime(this.latest_time);
    this.reportService.setDate(this.latest_date);
    this.reportService.setPlace(this.latest_place);

    if ((this.latest_date !== this.static_date) || (this.latest_time !== this.static_time) || (this.latest_place !== this.static_place)) {
      this.reportService.setModif(true);
      console.log('Modif = ', this.reportService.onModif);
    } else {
      console.log('Modif = ', this.reportService.onModif);
    }

    this.router.navigate(['/constat', 'three']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler les étapes précédentes ?')) {
      this.router.navigate(['/home']);
    }
  }
}
