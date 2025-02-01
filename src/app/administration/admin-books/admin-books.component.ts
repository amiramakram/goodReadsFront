import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { Book } from 'src/app/@shared/model/book';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  listBooks:Book[]=[];
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  isAdded:boolean=false;
  isEdit:boolean=false;
  EBook!:Book;

  showResults:boolean=false;
  titlename="books"
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.books();
  }
  next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.books();
    }

    }

    prev=()=>{
      if(this.page>1){
      this.page--;
      this.books();
      }
    }
    currentPage(p:number)
    {
      this.page=p;
      this.books();
    }


    books()
    {
      this.api.get(`${environment.baseUrl}/book/page/${this.page}`).subscribe(data=>{
        this.listBooks=data.data;
        console.log(data.data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
      })

    }

    deleteBook(id: string) {
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
          this.api.delete(`${environment.baseUrl}/book/${id}`).subscribe({
            next: () => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.books();
            },
            error: () => {

            }
          });
        }
      });
    }



  receivedNewBook(e:any)
  {
    this.isAdded=e;
    this.books();
  }
  showBook(book:Book)
  {
    this.EBook=book;
  }

  receivedEditBook(e:any)
  {
    this.isEdit=e;
    this.books();
  }


  search(searchText:string) {
    this.showResults=true;

    if(searchText==""){
      this.books();
    }else{
      this.api.get(`${environment.baseUrl}/book/search/${searchText}`).subscribe(
        {
         next:(data) => {
          this.listBooks = data;
          console.log("book",data);
        },
        error:(err) => {
          console.error(err);
        }
      }
      );
    }
  }
}
