import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Driver} from '../../../models/driver.model';
import {Subscription} from 'rxjs';
import {DriverService} from '../../../services/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {

  driverForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router: Router
  ) { }

  ngOnInit() {
    this.iniForm();
    console.log('initialisation driver-form...');
  }

  iniForm() {
    this.driverForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: '',
        adresse: ['', Validators.required],
        numPermis: ['', Validators.required],
        dateDelivrance: ['', Validators.required]
      }
    );
  }

  onAddDriver() {
    const formValue = this.driverForm.value;
    const newDriver = new Driver(
      0,
      formValue['nom'],
      formValue['prenom'],
      formValue['adresse'],
      formValue['numPermis'],
      formValue['dateDelivrance']
    );
    this.driverService.addDriver(newDriver);
    this.router.navigate(['/constat', 'three']);
  }
}
