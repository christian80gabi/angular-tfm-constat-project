import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Driver} from '../../models/driver.model';
import {DriverService} from '../../services/driver.service';
import {VehicleService} from '../../services/vehicle.service';
import {Vehicle} from '../../models/vehicle.model';

@Component({
  selector: 'app-constat-three',
  templateUrl: './constat-three.component.html',
  styleUrls: ['./constat-three.component.scss']
})
export class ConstatThreeComponent implements OnInit, OnDestroy {

  driverSubscription: Subscription;
  drivers: Driver[];

  vehicleSubscription: Subscription;
  vehicles: Vehicle[];

  constructor(
    private router: Router,
    private driverService: DriverService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getDrivers();
    this.getVehicles();

    console.log('On getting all drivers and cars');
  }

  getDrivers() {
    this.driverSubscription = this.driverService.driverSubject.subscribe(
      (drivers: Driver[]) => {
        this.drivers = drivers;
      }
    );
    this.driverService.emitDriver();
  }

  getVehicles() {
    this.vehicleSubscription = this.vehicleService.vehiclesSubject.subscribe(
      (vehicle: Vehicle[]) => {
        this.vehicles = vehicle;
      }
    );
    this.vehicleService.emitVehicle();
  }

  ngOnDestroy(): void {
    this.driverSubscription.unsubscribe();
    this.vehicleSubscription.unsubscribe();
    console.log('On Destroying');
  }

  onNext() {
    this.router.navigate(['/constat', 'four']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }
}
