import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Vehicle} from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: Vehicle[] = [
    new Vehicle( 0, 'BMW A1600', 0, 'TN4257', 0)
  ];

  constructor(
    private http: HttpClient
  ) { }

  // functions for car Object
  vehiclesSubject = new Subject<Vehicle[]>();

  emitVehicle() {
    this.vehiclesSubject.next(this.vehicles.slice());
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
    this.emitVehicle();
    console.log('Car Added');
  }

  getVehiclesData(id_insured: number) {
    this.http.post<Vehicle>('/api/insured/vehicle/getVehiclesData', id_insured);
  }

  updateCarsToDb() {
    // this.http.put('/api/savecar.php');
  }
}
