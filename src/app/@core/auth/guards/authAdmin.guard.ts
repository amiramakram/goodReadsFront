
import { CanActivate, Route, Router, } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthService } from '../auth.service';


@Injectable({

  providedIn:'root'
})

export class AuthAdminGuard implements CanActivate
{
  constructor(private authAdmin:AuthService ,private router:Router){}
  canActivate(): boolean {
    if(this.authAdmin.isAdmin()&&this.authAdmin.isLogin())
    return true;

    this.router.navigate(['/Admin/login'])
    return false;
  }

}
