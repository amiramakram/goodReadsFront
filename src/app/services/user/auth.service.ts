import { User } from 'src/app/@shared/model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode'
import { Router } from '@angular/router';
Router
@Injectable({
  providedIn: 'root'

})
export class AuthService {
  currentUser= new BehaviorSubject(null) 
  constructor(private _HttpClient:HttpClient,private _Router:Router) {

    if(localStorage.getItem('token') != null) {
      this.saveCurrentUser();
  }
  }

  register(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/register`,data)
  }


  login(data:any): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/login/user`,data)
  }

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('token');
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser)
  }

  getuser():Observable<User | null>
  {
    return this.currentUser.asObservable();
  }
  logout(){
    this.currentUser.next(null)
    localStorage.removeItem('token')
    localStorage.removeItem('isLogin')
    localStorage.removeItem('isUser')
    this._Router.navigate(['/login']);
  }
}