import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {InsuredService} from 'src/app/services/insured.service';
import {Insured} from 'src/app/models/Insured.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private insuredService: InsuredService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];

    // console.log(form.value);
    this.authService.signIn(email, password).subscribe(
      (data) => {
        console.log('the result for sign in is: ', data);
        if (data) {
          this.authService.setIsAuth(true);
          this.router.navigate(['/home']);
        } else {
          window.alert('l\'adresse email ou le mot de passe est invalide');
        }
      },
      (error) => {
        console.log('Error for getting data from PHP: ', error);
      }
    );

    // getting user data after connection successful
    this.insuredService.getInsuredData();
    /* this.insuredService.getInsuredData().subscribe(
      (response) => {
        this.insuredService.tabInsured = response.map(
          (insured) => {
            return new Insured(
              insured.id_insured,
              insured.first_name_insured,
              insured.last_name_insured,
              insured.email_insured,
              insured.password_insured,
              insured.address_insured,
              insured.tel_insured,
              insured.status,
              insured.token
            );
          }
        );
      }
    );*/
  }
}
