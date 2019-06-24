import { Injectable } from '@angular/core';
import {Driver} from '../models/driver.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private divers: Driver[] = [
    new Driver(0, 'Fekir', 'Nour', '0012 Marsa, Tunis, Tunisie', '455A46467B', '12/07/2010'),
    new Driver(1, 'Salem', 'Hamza', '3012 Marsa, Tunis, Tunisie', '015A46467B', '22/02/2013')
  ];
  driverSubject = new Subject<Driver[]>();

  constructor(
    private http: HttpClient
  ) { }

  // functions for driver Object
  emitDriver() {
    this.driverSubject.next(this.divers.slice());
  }

  addDriver(driver: Driver) {
    this.divers.push(driver);
    this.emitDriver();
    console.log('Driver Added');
  }

  getDriversFromDb() {
    // this.http.get("/api/driver.php");
  }

  updateDriversToDb() {
    // this.http.put("/api/driverput.php");
  }
}
