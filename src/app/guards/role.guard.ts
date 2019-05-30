import { MonocleService } from './../monocle.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private monocleService: MonocleService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // const user = this.monocleService.decode();

    // if (user && user.Role === next.data.role) {
    //   return true;
    // }

    // navigate to not found page
    this._router.navigate(['/login']);
    return false;
  }

}