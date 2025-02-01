import { environment } from 'src/environments/environment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.css']
})
export class AdminBooksAddComponent  implements OnInit {

  categoryList:any;
  authorList:any;
  selectedImage!:File;
  formBook:FormGroup;
  @Output()isAdded: EventEmitter<boolean> =   new EventEmitter();

    constructor(private fb: FormBuilder, private api: ApiService) {
    this.formBook = fb.group(
      {
        name: ['', [Validators.required]],
        summary: ['', [Validators.required]],
        author: ['', [Validators.required]],
        category: ['', [Validators.required]],
        image: ['', [Validators.required]],
      });


    }

  ngOnInit(): void {

    this.api.get(`${environment.baseUrl}/admin/author/all`).subscribe({
      next:(data)=>{
        this.authorList=data;
        console.log("Author : "+data);
      },
      error:()=>{

      }
    });


    this.api.get(`${environment.baseUrl}/category`).subscribe({
      next:(data)=>{
        this.categoryList=data;
      },
      error:()=>{

      }
    });

  }

   uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }

  addBook() {

    let formdata= new FormData();

    formdata.append("name", this.name?.value);
    formdata.append("summary", this.summary?.value);
    formdata.append("author", this.author?.value);
    formdata.append("category", this.category?.value);
    formdata.append("img",this.selectedImage,this.selectedImage.name);


    this.api.post(`${environment.baseUrl}/book`,formdata).subscribe({
      next:(data)=>{
        console.log(data);
        this.isAdded.emit(true);
        setTimeout(() => {
          this.isAdded.emit(false);
        }, 3000);
      },
      error:()=>
      {

      }
    });

  }



  get name() {
    return this.formBook.get('name');
  }

  get summary() {
    return this.formBook.get('summary');
  }

  get author() {
    return this.formBook.get('author');
  }

  get category() {
    return this.formBook.get('category');
  }

  get image()
  {
    return this.formBook.get("image");
  }

}



