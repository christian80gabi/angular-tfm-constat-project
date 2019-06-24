import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-constat-eight',
  templateUrl: './constat-eight.component.html',
  styleUrls: ['./constat-eight.component.scss']
})
export class ConstatEightComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNext() {
    // getting all selected fields from template form
    console.log('');

    this.router.navigate(['/constat', 'nine']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }
}
