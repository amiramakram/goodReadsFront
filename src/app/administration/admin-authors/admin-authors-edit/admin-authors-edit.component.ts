import { environment } from './../../../../environments/environment';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-admin-authors-edit',
  templateUrl: './admin-authors-edit.component.html',
  styleUrls: ['./admin-authors-edit.component.css']
})
export class AdminAuthorsEditComponent implements OnChanges{

  @Input()author:any;
  editAuthor:FormGroup;
  selectedImage!:File;
  select:boolean=false;
  @Output()isEdit:EventEmitter<boolean> = new EventEmitter();
  error:Boolean=false;

  constructor(private fb: FormBuilder, private api: ApiService)
  {
    this.editAuthor = fb.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        dateBirth: ['', [Validators.required]],
        image: [''],
        ID:['']
      });

  }

  ngOnChanges(): void {
    this.Author();
  }


  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];

   }
  Author()
  {
    this.editAuthor.get('fName')?.setValue(this.author?.firstName);
    this.editAuthor.get('lName')?.setValue(this.author?.lastName);
    this.editAuthor.get('ID')?.setValue(this.author?.ID);
    this.editAuthor.get('dateBirth')?.setValue(this.author?.dateOfBirth);
  }


   edit()
  {
    let formdata= new FormData();
    let date=(this.EdateBirth?.value);

    formdata.append("firstName", this.EfirstName?.value);
    formdata.append("lastName", this.ElastName?.value);
    formdata.append("dateOfBirth", date);
     if(this.selectedImage){
     formdata.append("photo",this.selectedImage,this.selectedImage.name);
     }
   this.api.put(`${environment.baseUrl}/admin/author/${this.author.ID}`,formdata).subscribe(
      {
      next:(data)=>{
        this.editAuthor.reset();
        this.isEdit.emit(true);
         setTimeout(() => {
           this.isEdit.emit(false);
         }, 3000);

      },
       error:()=>{

      }

    }
    );
  }

  get EfirstName() {
    return this.editAuthor.get('fName');
  }

  get ElastName() {
    return this.editAuthor.get('lName');
  }

  get EdateBirth() {
    return this.editAuthor.get('dateBirth');
  }

  get Eimage()
  {
    return this.editAuthor.get("image");
  }

}
