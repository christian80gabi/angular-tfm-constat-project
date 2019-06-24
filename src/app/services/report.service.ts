import { Injectable } from '@angular/core';
import {Witness} from '../models/witness.model';
import {Subject} from 'rxjs';
import {Report} from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private report: Report = new Report(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  private modif = false;
  private witnesses: Witness[] = [
    new Witness(1, 'Marc Alexander', '1005 ibn Kaldom, Tunis, Tunisie', 56635485, 1)
  ];
  witnessSubject = new Subject<Witness[]>();

  private reports: Report[] = [
    new Report(1, 1, '12-06-2018', '12:56', '1002 Habib Bourgiba, Tunis, Tunisie', 0, 1, 'jjk', 1, 1, 1, 1, 1, '')
  ];
  reportsSubject = new Subject<Report[]>();

  constructor() { }

  // functions for witness Object
  emitWitness() {
    this.witnessSubject.next(this.witnesses.slice());
  }
  addWitness(witness: Witness) {
    this.witnesses.push(witness);
    this.emitWitness();
    console.log('Witness Added');
  }

  // functions for constats (historic)
  emitReport() {
    this.reportsSubject.next(this.reports.slice());
  }
  addConstat(report: Report) {
    this.reports.push(report);
    this.emitReport();
    console.log('Report Added');
  }

  // getters and setters to put attributes in constat Object
  setWitnesses(id_report: number) {
    for (const witness of this.witnesses) {
      witness.report = id_report;
    }
  }

  setModif(val) {
    this.modif = val;
  }

  get onModif() {
    return this.modif;
  }

  setNumVeh(num) {
    this.report.vehicles_number = num;
  }

  get numVeh() {
    return this.report.vehicles_number;
  }

  setTime(time) {
    this.report.accident_hour = time;
  }

  setDate(date) {
    this.report.accident_date = date;
  }

  setPlace(place) {
    this.report.accident_place = place;
  }
}
