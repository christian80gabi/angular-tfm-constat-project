import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../services/report.service';
import {Witness} from '../../models/witness.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-constat-four',
  templateUrl: './constat-four.component.html',
  styleUrls: ['./constat-four.component.scss']
})
export class ConstatFourComponent implements OnInit {

  constructor(
    private router: Router,
    private reportService: ReportService
  ) { }

  ngOnInit() {
  }

  onNext(form: NgForm) {
    // getting all selected fields from template form
    const circonstances: string[] = [
      form.value['parking'], form.value['circulation'], form.value['croisement'], form.value['manoeuvre']
    ];
    console.log('The circonstances selected are: ', circonstances);

    this.router.navigate(['constat', 'four-one']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }
}
