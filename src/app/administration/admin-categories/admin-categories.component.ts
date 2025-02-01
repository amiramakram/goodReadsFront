import { environment } from './../../../environments/environment';
import { ApiService } from './../../@core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/@shared/model/icategory';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  formCategory:FormGroup;
  listCategories:ICategory[]=[];
  selectedImage!:File;
  categoryImage:String='';
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  isAdded:boolean=false;
  isEdit:boolean=false;
  error:boolean=false;
  ECategory!:ICategory;

  showResults:boolean=false;
  titlename="category"

  constructor(private api:ApiService,private fb:FormBuilder)
  {

      this.formCategory=fb.group(
      {
        name:['',[Validators.required]],
        image:['',Validators.required]
      });

  }

  ngOnInit(): void {
    this.categories();
  }


  next=()=>{
  if(this.page<this.totalPages){
    this.page++;
    this.categories();
  }

  }

  prev=()=>{
    if(this.page>1){
    this.page--;
    this.categories();
    }
  }


  currentPage(p:number)
  {
    this.page=p;
    this.categories();
  }





  get nameCategory(){
    return this.formCategory.get('name');
  }
  get image(){
    return this.formCategory.get('image');
  }




  categories()
  {
    this.api.get(`${environment.baseUrl}/category/page/${this.page}`).subscribe(data=>{
      this.listCategories=data.data;
      this.totalPages=data.pages.totalPages;
      this._pagination=[...Array(this.totalPages).keys()];
    })

  }

  uploadImage(event: any) {
    this.selectedImage=event.target.files[0];
   }

  addCategory()
  {

    let formdata= new FormData();

    formdata.append("name", this.nameCategory?.value);
    formdata.append("img",this.selectedImage,this.selectedImage.name);
    this.api.post(`${environment.baseUrl}/category`,formdata).subscribe(
    {
      next:()=>{
        this.isAdded=true;
        this.categories();
        setTimeout(() => {
          this.isAdded= false;
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

  showCategory(category:ICategory)
  {
    this.ECategory=category;
  }

  receivedEditCategory(e:any)
  {
    this.isEdit=e;
    this.categories();
  }

  receivedErrorCategory(e:any)
  {
    this.error=e;
  }



  deleteCategory(id:string)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete(`${environment.baseUrl}/category/${id}`).subscribe({
          next:()=>
          {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.categories();
          },
          error:()=>{

          }
        });
      }
    });



  }

  search(searchText:string) {
    this.showResults=true;

    if(searchText==""){
      this.categories();
    }else{
      this.api.get(`${environment.baseUrl}/category/search/${searchText}`).subscribe(
        {
         next:(data) => {
          this.listCategories = data;
        },
        error:(err) => {
          console.error(err);
        }
      }
      );
    }
  }
}
