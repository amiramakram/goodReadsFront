import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
firstName?:string
lastName?:string
img?:string;
userData?:any
isLoginUser:boolean = false;
constructor(private _AuthService:AuthService){
_AuthService.currentUser.subscribe(()=>{
  if (_AuthService.currentUser.getValue() !=null ){
    this.isLoginUser = true;
  }
  else{
    this.isLoginUser = false;
  }
})
this._AuthService.getuser().subscribe(user=>{
  this.userData = user;
  this.firstName = this.userData.user.first_name
  this.lastName = this.userData.user.last_name
  this.img=this.userData.user.img;
 })
}
ngOnInit(){}
isLogOut(){
  this._AuthService.logout();
}
}
