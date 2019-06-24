import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Insured} from '../models/Insured.model';

export interface MyData {
  success: boolean;
  message: string;
}

interface IsLoggedIn {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;

  constructor(
    private http: HttpClient
  ) { }

  setIsAuth (value: boolean) {
    this.isAuth = value;
  }

  get onIsAuth () {
    return this.isAuth;
  }

  signIn(email: string, password: string) {
    return this.http.post('/api/auth/signIn.php', {
      email,
      password
    }, {
      responseType: 'json'
    }).pipe();
  }

  isLoggedIn(): Observable<IsLoggedIn> {
    return this.http.get<IsLoggedIn>('/api/auth/isLoggedIn.php');
  }

  signUp(insured: Insured) {
    return this.http.post('/api/auth/signUp.php', insured
    , {
      responseType: 'json'
    }).pipe();
  }

  signOut() {
    return this.http.get('/api/auth/isLoggedOut.php',
      {
        responseType: 'json'
      });
  }
}
