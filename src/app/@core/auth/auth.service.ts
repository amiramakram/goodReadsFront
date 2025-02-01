import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getuser() {
    throw new Error('Method not implemented.');
  }
  constructor(private api:ApiService) { }

signup(url:string,body:{}):Observable<any>
{

  return this.api.post(`${url}`,body);
}



login(url:string,body:{}):Observable<any>
{
  return this.api.post(`${url}`,body);
}

isLogin():boolean
{
  if(localStorage.getItem("isLogin")=="true")
  return true;
  return false;
}

isAdmin():boolean
{
  if(localStorage.getItem('isAdmin')=="true")
  return true;
  return false;
}

logout()
{
  localStorage.clear();
}




}



