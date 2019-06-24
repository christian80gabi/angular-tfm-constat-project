import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Insured} from '../../models/Insured.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.iniForm();
  }

  iniForm() {
    this.signUpForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmitForm() {
    const formValue = this.signUpForm.value;
    const newUser = new Insured(
      0,
      formValue['prenom'],
      formValue['nom'],
      formValue['email'],
      formValue['password'],
      null,
      null,
      null,
      null,
    );

    console.log(newUser);
    this.onSignUp(newUser);
  }

  onSignUp(insured: Insured) {
    this.authService.signUp(insured).subscribe(
      (data) => {
        console.log('the result is', data);
        if (data) {
          console.log('New Assure created, ', data);
          this.router.navigate(['/auth', 'signin']);
        } else {
          console.log(data);
          window.alert('Cet adresse email est déjà lié à un autre compte !');
        }
      },
      (error) => {
        console.log('The error for getting from PHP: ', error);
      }
    );
  }

}
