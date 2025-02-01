import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent  implements OnChanges{

  @Input()category:any;
  editCategory:FormGroup;
  selectedImage!:File;
  @Output()isEdit:EventEmitter<boolean> = new EventEmitter();
  @Output()isError:EventEmitter<boolean> = new EventEmitter();
  constructor(private api:ApiService,private fb:FormBuilder)
  {
    this.editCategory=fb.group(
      {
        name:['',[Validators.required]],
        image:[''],
        _id:['']
      });
  }

  ngOnChanges(): void {
    this.Category();
  }

  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }

   Category()
   {
    this.editCategory?.get('name')?.setValue(this.category?.name);
    this.editCategory.get('_id')?.setValue(this.category?._id);

   }

   EditCategory()
   {
     let formdata= new FormData();
     formdata.append("name", this.ECategory?.value);
     if(this.selectedImage)
     formdata.append("img",this.selectedImage,this.selectedImage.name);
     this.api.put(`${environment.baseUrl}/category/${this.editCategory.get('_id')?.value}`
     ,formdata).subscribe({
       next:()=>{
         this.isEdit.emit(true);
         setTimeout(() => {
           this.isEdit.emit(false);
         }, 3000);

       },
       error:()=>{
         this.isError.emit(true);
         setTimeout(() => {
           this.isError.emit(false);
         }, 3000);
       }
     });

   }


  get ECategory(){
    return this.editCategory.get('name');
  }
  get idCategory(){
    return this.editCategory.get('_id');
  }

  get EImage()
  {
    return this.editCategory.get('image');
  }


}
