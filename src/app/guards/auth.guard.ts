import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactusComponent } from '../components/contactus/contactus.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //restrict your movement
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    alert("alert from authguard");
    this.router.navigate(['login']);
    return false;
  }
  constructor(private router:Router){
    
  }
  //before destroying the component ask
  canDeactivate(component:ContactusComponent):boolean{
    return window.confirm("want to deactivate");
  }
}
