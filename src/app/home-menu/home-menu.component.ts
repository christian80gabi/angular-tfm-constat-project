import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignOut () {
    this.authservice.signOut().subscribe(
      (res) => {
        const result = new Promise((resolve, reject) => {
          resolve(res);
        });
        console.log('Response for sign out equals: ', result);
        if (result) {
          this.authservice.setIsAuth(false);
          console.log('deconnection successful');
          this.router.navigate(['auth', 'signin']);
        }
        if (!this.authservice.onIsAuth) {
          console.log(false);
          console.log('deconnection failed');
        } else {
          console.log(true);
        }
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

}
