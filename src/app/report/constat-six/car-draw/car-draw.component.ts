import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-draw',
  templateUrl: './car-draw.component.html',
  styleUrls: ['./car-draw.component.scss']
})
export class CarDrawComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['/constat', 'six-one']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }
}
