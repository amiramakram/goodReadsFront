import { ApiService } from 'src/app/@core/api.service';
import { Book } from '../../../@shared/model/book';
import { BookServiceService } from './../../../services/user/book-service.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnChanges,OnInit{

  books!:Book[]

  status!:string | "Want To Read"
  bookId!:string
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  userId!:User
  userData?:any



  constructor(
    private Auth: AuthService,
    private ActvetedRoute: ActivatedRoute,
    private bookService: BookServiceService,
    private Api: ApiService
    ){

      this.Auth.getuser().subscribe(user=>{
        this.userData = user;
        this.userId = this.userData.user._id
        // console.log("user id",this.userData.user._id);
      })

    this.ActvetedRoute.paramMap.subscribe((parmMap)=>{
     this.bookId =  parmMap.get('id') || ''
      this.status = parmMap.get('status') || "notRead"

    })
  }

  ngOnInit(): void {
    this.getBooks()
  }

  ngOnChanges(): void {
    // console.log("asd");

  }

  getBooks()
    {

      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}/${this.userId}`).subscribe(data=>{
        this.books=data.data;
        // console.log(this.books);
        // console.log(data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
        // console.log(this.userId);
      })
    }

    getBooksByStatus(status:string)
    {
      // console.log("asd1");
      this.Api.get(`${environment.baseUrl}/home/home/page/${this.page}/${status}/${this.userId}`).subscribe( book =>{
        this.books = book.data
        // console.log(this.books);
        // console.log(book);
        this.totalPages=book.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
        // console.log(this.userId);
       })
    }
   next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.getBooks();
    }}
    prev=()=>{
      if(this.page>1){
      this.page--;
      this.getBooks();
      }
    }

    currentPage(p:number)
    {
      this.page=p;
      this.getBooks();
    }


  }

