import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-authors-add',
  templateUrl: './admin-authors-add.component.html',
  styleUrls: ['./admin-authors-add.component.css']
})
export class AdminAuthorsAddComponent {


  formAuthor: FormGroup;
  selectedImage!:File;
  @Output()isAdded: EventEmitter<boolean> =   new EventEmitter();
  error:Boolean=false;

    constructor(private fb: FormBuilder, private api: ApiService) {
    this.formAuthor = fb.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        dateBirth: ['', [Validators.required]],
        image: ['', [Validators.required]],
      });


    }


   uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
    console.log(this.selectedImage);

   }

  addAuthor() {

    let formdata= new FormData();
    let date=(this.dateBirth?.value);
    console.log(this.dateBirth?.value);
    formdata.append("firstName", this.firstName?.value);
    formdata.append("lastName", this.lastName?.value);
    formdata.append("dateOfBirth", date);
    formdata.append("photo",this.selectedImage,this.selectedImage.name);



    this.api.post(`${environment.baseUrl}/admin/author`,formdata).subscribe({
      next:()=>{

        this.isAdded.emit(true);
        setTimeout(() => {
          this.isAdded.emit(false);
        }, 3000);
      },
      error:()=>
      {
        this.error=true;
        setTimeout(() => {
          this.error= false;
        }, 3000);
      }
    });

  }


  get firstName() {
    return this.formAuthor.get('fName');
  }

  get lastName() {
    return this.formAuthor.get('lName');
  }

  get dateBirth() {
    return this.formAuthor.get('dateBirth');
  }

  get image()
  {
    return this.formAuthor.get("image");
  }

}
