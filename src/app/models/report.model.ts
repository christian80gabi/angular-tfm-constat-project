import {Witness} from './witness.model';

export class Report {
  constructor (
    public id_report: number,
    public vehicles_number: number,
    public accident_date: string,
    public accident_hour: string,
    public accident_place: string,
    public damage: number,
    public wounded: number,
    public circumstances: string,
    public insured: number,
    public insurance: number,
    public vehicle: number,
    public driver: number,
    public way: number,
    public observations: string
  ) {
  }
}
