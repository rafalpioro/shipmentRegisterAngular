import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";




@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate{


  role: string;

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const allowedRoles = next.data.role;
    const isAuthorized = this.isAuthorised(allowedRoles);

    let url: string = state.url;

    return (this.checkLogin(url) && isAuthorized );
  }

  private checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.redirectToUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

  private isAuthorised(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    this.role = this.authService.getRoleFromToken();
    return allowedRoles.includes(this.role);
  }


}
