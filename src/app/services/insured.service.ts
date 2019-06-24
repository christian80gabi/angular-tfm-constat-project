import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import {Insured} from '../models/Insured.model';
import {map} from 'rxjs/operators';
import {promise} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class InsuredService implements OnInit {

  private insured: Insured;
  private key = 'insured';

  constructor(
    private http: HttpClient,
  ) {}

   ngOnInit() {
   }

  // getter and setter for insured
  setInsured(insured: Insured) {
    this.insured = insured;
  }

  get getInsured() {
    return this.insured;
  }

  get getKey() {
    return this.key;
  }

  // getting insured data after connctionn successful from onSignIn()
  /*getInsuredData() {
    this.http.get<Insured>('/api/insured/getInsuredData.php').subscribe(
      (response) => {
        this.insured = response;
      }
    );
  }*/

  getInsuredData() {
    return new Promise<Insured>(
      (resolve, reject) => {
        this.http.get<Insured>('/api/insured/getInsuredData.php').subscribe(
          (response) => {
            this.insured = response;
            resolve(this.insured);
            console.log(response, 'Response');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  checkPassword(password: string): boolean {
    return password === this.insured.password_insured;
  }

  updateInsuredData(insured: Insured) {
    this.insured = insured;
    this.http.post('/api/insured/updateInsuredData.php', insured);
  }

}
