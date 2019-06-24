import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.onIsAuth) {
      return true;
    }
    return this.authService.isLoggedIn().pipe(
      map(
        (res) => {
          if (res.status) {
            this.authService.setIsAuth(true);
            return true;
          } else {
            this.router.navigate(['/auth', 'signin']);
            return false;
          }
        }
      )
    );
  }
}
