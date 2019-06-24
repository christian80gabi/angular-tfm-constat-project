import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-constat-nine',
  templateUrl: './constat-nine.component.html',
  styleUrls: ['./constat-nine.component.scss']
})
export class ConstatNineComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNext(form: NgForm) {
    // getting all selected fields from template form
    console.log('');

    this.router.navigate(['/home']);
  }

  onCancel() {
    if (confirm('Voulez-vous annuler toute la rédaction de ce constat ?')) {
      this.router.navigate(['/home']);
    }
  }

}
