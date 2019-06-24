import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-constat-six-one',
  templateUrl: './constat-six-one.component.html',
  styleUrls: ['./constat-six-one.component.scss']
})
export class ConstatSixOneComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNext(form: NgForm) {
    // getting all selected fields from template form
    console.log('');

    this.router.navigate(['/constat', 'seven-one']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }

}
