import { environment } from 'src/environments/environment.development';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-authors',
  templateUrl: './user-authors.component.html',
  styleUrls: ['./user-authors.component.css']
})
export class UserAuthorsComponent implements OnInit,OnChanges {
  authors: any=[]
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
// searchText: any;
characters: any=[];
showResults:boolean=false;
titlename="author"
  constructor (private spi:ApiService,private http: HttpClient){
  }
  ngOnChanges() {

  }

  ngOnInit() {

    this.getAuthor();
  }

  getAuthor(){

    this.spi.get(`${environment.baseUrl}/admin/author/page/${this.page}`).subscribe(data=>{
      this.authors=data;
      this.totalPages = data.pages.totalPages;
      this._pagination = [...Array(this.totalPages).keys()];
    })
  }
  search(searchText:string) {
    this.showResults=true;

    if(searchText==""){

      this.characters=[]
    }else{
      this.http.get<any[]>(`${environment.baseUrl}/admin/author/search/${searchText}`).subscribe(
        (authors) => {
          this.characters = authors;
        },
        (err) => {
          // console.error(err);
        }
      );
    }
  }

  next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.getAuthor();
    }}
    prev=()=>{
      if(this.page>1){
      this.page--;
      this.getAuthor();
      }
    }

    currentPage(p:number)
    {
      this.page=p;
      this.getAuthor();
    }

}
