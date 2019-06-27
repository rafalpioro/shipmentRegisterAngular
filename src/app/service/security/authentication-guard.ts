import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate{


  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.redirectToUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
