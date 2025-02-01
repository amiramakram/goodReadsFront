import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit{
  books!:any;
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  characters: any=[];
  show:boolean=false;
  titlename="book";
  constructor(private Api: ApiService, private http: HttpClient){

}
  ngOnInit(): void {
   this.getBooks();
  }

  getBooks()
    {
      this.Api.get(`${environment.baseUrl}/home/all/page/${this.page}`).subscribe(data=>{
        this.books=data.data;
       console.log (this.books);
      //   console.log(data);
        this.totalPages=data.pages.totalPages;
        this._pagination=[...Array(this.totalPages).keys()];
      })
    }
 search(searchText:string) {

      if(searchText==""){

        this.characters=[]
      }else{
        this.http.get<any[]>(`${environment.baseUrl}/book/search/${searchText}`).subscribe(
          (book) => {
            this.characters = book;
          },
          (err) => {
            console.error(err);
          }
        );
      }
    }

    showResults(e:any)
    {
      this.show=e;
    }

    next=()=>{
      if( this.page < this.totalPages){
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
