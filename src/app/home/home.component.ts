import { Component, OnInit } from '@angular/core';
import {InsuredService} from '../services/insured.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { Insured } from '../models/Insured.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: Insured;

  constructor(
    private authService: AuthService,
    private insuredService: InsuredService,
    private router: Router
  ) { }

  ngOnInit() {
    this.insuredService.getInsuredData().then(
      () => {
        this.user = this.insuredService.getInsured;
        console.log(this.user, 'User 1');
      }
    );
  }

  Insuredsession() {
    /*this.user = new Insured(
      sessionStorage.setItem('id_insured', this.insuredService.getInsured.id_insured.toString),
      sessionStorage.setItem('first_name_insured', this.insuredService.getInsured.first_name_insured),
      sessionStorage.setItem('last_name_insured', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('email_insured', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('password_insured', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('address_insured', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('tel_insured', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('status', this.insuredService.getInsured.id_insured),
      sessionStorage.setItem('token', this.insuredService.getInsured.id_insured)
    )*/
  }
}
