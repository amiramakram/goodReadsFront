import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  implements OnInit{

  formLogin:FormGroup;
  error:boolean=false;
  message:string="";

  constructor(private fb:FormBuilder ,private auth:AuthService,private router:Router){
    this.formLogin=fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
      }
    );
  }
  ngOnInit(): void {
    if(this.auth.isLogin()&&this.auth.isAdmin())
    {
      this.router.navigate(['/Admin/Dashboard']);
    }
  }


  get email()
  {
    return this.formLogin.get('email');
  }

  get password()
  {
    return this.formLogin.get('password');
  }

  login()
  {
    if(this.email?.value=='' || this.password?.value=='')
    {
      this.message="Email and Password are required.";
      this.error=true;
        setTimeout(()=>{
          this.error=false;
        },4000);
    }else
    {
    this.auth.login(`${environment.baseUrl}/login`,this.formLogin.value).subscribe(
      {
      next:(data)=>{
      if(data.isAdmin==true)
      {
      localStorage.setItem('token',data.token);
      localStorage.setItem('isAdmin',data.isAdmin);
      localStorage.setItem('fName',data.first_name);
      localStorage.setItem('lName',data.last_name);
      localStorage.setItem('isLogin',"true");
      console.log(data);
      this.router.navigate(['/Admin/Dashboard']);
        }else
        {
         this.message="Email or Password is not vaild";
        this.error=true;
        setTimeout(()=>{
          this.error=false;
        },4000);
        }
      },
      error:()=>
      {
        this.message="Email or Password is not vaild";
        this.error=true;
        setTimeout(()=>{
          this.error=false;
        },4000);
      }
     });
    }

  }

}
