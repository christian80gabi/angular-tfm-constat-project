import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-constat-six',
  templateUrl: './constat-six.component.html',
  styleUrls: ['./constat-six.component.scss']
})
export class ConstatSixComponent implements OnInit {

  car = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCar() {
    if (!this.car) {
      this.car = true;
    } else {
      this.car = false;
    }
  }

}
