import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VehicleService} from '../../../services/vehicle.service';
import {Vehicle} from '../../../models/vehicle.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  vehicleForm: FormGroup;

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.iniForm();
    console.log('initialisation car-form...');
  }

  iniForm() {
    this.vehicleForm = this.formBuilder.group(
      {
        mark: ['', Validators.required],
        type: ['', Validators.required],
        matricule: ['', Validators.required]
      }
    );
  }

  onAddVehicle() {
    const formValue = this.vehicleForm.value;
    const  newCar = new Vehicle(
      1,
      formValue['mark'],
      formValue['type'],
      formValue['matricule'],
      0
    );
    console.log(formValue);
    this.vehicleService.addVehicle(newCar);
    this.router.navigate(['/constat', 'three']);
  }

}
