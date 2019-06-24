import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuredService } from 'src/app/services/insured.service';
import {Router} from '@angular/router';
import {Insured} from '../../models/Insured.model';

@Component({
  selector: 'app-update-my-account',
  templateUrl: './update-my-account.component.html',
  styleUrls: ['./update-my-account.component.scss']
})
export class UpdateMyAccountComponent implements OnInit {

  init = this.insuredService.getInsured;

  constructor(
    private insuredService: InsuredService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onUpdate(form: NgForm) {
    const currentPassword = form.value['currentPassword'];

    const nom = form.value['nom'];
    const prenom = form.value['prenom'];
    const email = form.value['email'];
    const password = form.value['password'];
    const adresse = form.value['adresse'];
    const tel = form.value['tel'];

    if (this.insuredService.checkPassword(currentPassword)) {
      const insured = new Insured(nom, prenom, email, password, adresse, tel, null, null, null);
      this.insuredService.updateInsuredData(insured);
      this.router.navigate(['/home']);
      window.alert('Success de mise à jour');
    } else {
      window.alert('Le mot de passe est incorrect');
    }
  }

}
