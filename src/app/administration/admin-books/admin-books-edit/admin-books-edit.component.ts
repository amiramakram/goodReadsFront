import { Component, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-books-edit',
  templateUrl: './admin-books-edit.component.html',
  styleUrls: ['./admin-books-edit.component.css']
})
export class AdminBooksEditComponent implements OnInit , OnChanges{


  @Input()book:any;
  categoryList:any;
  authorList:any;
  selectedImage!:File;
  editBook:FormGroup;
  @Output()isEdit: EventEmitter<boolean> =   new EventEmitter();

    constructor(private fb: FormBuilder, private api: ApiService) {
    this.editBook = fb.group(
      {
        name: ['', [Validators.required]],
        summary: ['', [Validators.required]],
        author: ['', [Validators.required]],
        category: ['', [Validators.required]],
        image: [''],
      });


    }
  ngOnChanges(): void {
    this.Book();
    console.log(this.book);
  }

  ngOnInit(): void {

    this.api.get(`${environment.baseUrl}/admin/author/all`).subscribe({
      next:(data)=>{
        this.authorList=data;
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

  Book()
  {
    this.editBook.get('name')?.setValue(this.book?.name);
    this.editBook.get('summary')?.setValue(this.book?.summary);
    this.editBook.get('category')?.setValue(this.book?.category._id);
    this.editBook.get('author')?.setValue(this.book?.author._id);
    //this.editBook.get('image')?.setValue(this.book?.img);
  }

   uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }

  edit() {

    let formdata= new FormData();
    formdata.append("name", this.name?.value);
    formdata.append("summary", this.summary?.value);
    formdata.append("author", this.author?.value);
    formdata.append("category", this.category?.value);

    if(this.selectedImage)
    formdata.append("img",this.selectedImage,this.selectedImage.name);

  //oldcategoryID/:categoryID/:oldauthorID/:authorID
   console.log("old cat",this.book.category._id);
   console.log("old author",this.book.author._id);
   console.log("form cat" ,formdata.get('category'));
   console.log("form author" ,formdata.get('author'));

    this.api.put(`${environment.baseUrl}/book/${this.book._id}/${this.book?.category._id}/${this.category?.value}/${this.book?.author._id}/${this.author?.value}`,formdata).subscribe({
      next:()=>{

        this.isEdit.emit(true);
        setTimeout(() => {
          this.isEdit.emit(false);
        }, 3000);
      },
      error:()=>
      {

      }
    });

  }



  get name() {
    return this.editBook.get('name');
  }

  get summary() {
    return this.editBook.get('summary');
  }

  get author() {
    return this.editBook.get('author');
  }

  get category() {
    return this.editBook.get('category');
  }

  get image()
  {
    return this.editBook.get("image");
  }


}
