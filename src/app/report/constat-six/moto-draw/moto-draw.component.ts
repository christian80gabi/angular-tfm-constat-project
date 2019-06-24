import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-moto-draw',
  templateUrl: './moto-draw.component.html',
  styleUrls: ['./moto-draw.component.scss']
})
export class MotoDrawComponent implements OnInit {

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
