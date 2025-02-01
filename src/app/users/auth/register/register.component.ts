import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../../services/user/auth.service';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/validator/passwordMatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordRegex = '^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
  error:boolean=false
  message?:string=''
  selectedImage!:File;
  isAdded:boolean=false;
  registerForm!: FormGroup;
  constructor(private _AuthService:AuthService,private _Router:Router, private fb: FormBuilder){}
  passwordMatching(){}
  ngOnInit() : void{

      this.registerForm =this?.fb.group({
      first_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
      last_name : new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
      email:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
      Validators.email,Validators.required]),
      password:new FormControl(null, [Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl(null, [ Validators.required ]),
      img : new FormControl('')
    });
    // ,[passwordMatch("password","confirmPassword")]
  }


    uploadImage(event: any) {
     this.selectedImage=event.target.files[0];
    }

submitRegisterForm(){
  // this._AuthService.register(registerForm.value).subscribe((response)=>{
  //   if(response.id){
  //     this._Router.navigate(['/login']);
  //   }
  //   else {
  //     console.log("asd")
  //     console.log(response.message)
  //     this.error=response.register.error.message;
  //   }
  // })
    /*let formdata= new FormData();
    if(this.selectedImage)
    formdata.append("img", this.selectedImage, this.selectedImage.name);
    formdata.append("first_name",this.registerForm.get("first_name")?.value);
    formdata.append("last_name",this.registerForm.get("last_name")?.value);
    formdata.append("email",this.registerForm.get("email")?.value);
    formdata.append("password",this.registerForm.get("password")?.value);
     formdata.append("confirmPassword",this.registerForm.get("confirmPassword")?.value);*/
  const formData = new FormData();
  formData.append('first_name', this.registerForm.get('first_name')?.value);
  formData.append('last_name', this.registerForm.get('last_name')?.value);
  formData.append('email', this.registerForm.get('email')?.value);
  formData.append('password', this.registerForm.get('password')?.value);
  formData.append('confirmPassword', this.registerForm.get('confirmPassword')?.value);
 // formData.append('img',this.registerForm.get('img')?.value);
  if(this.selectedImage)
  formData.append("img", this.selectedImage, this.selectedImage.name);


  this._AuthService.register(formData).subscribe({
    next: (Response)=>{
      this._Router.navigate(['/login']);
    },
    error:()=>{
      this.message="User Already Exist. Please Login";
      this.error=true;
      setTimeout(() => {
        this.error=false;
      }, 4000);
    }
  })

}
passwordMatch() {
  const password = this.registerForm.get('password')?.value;
  const confirmPassword = this.registerForm.get('confirmPassword')?.value;
  return password === confirmPassword;
}
}


