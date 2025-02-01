import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/@core/api.service';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-author-details',
  templateUrl: './user-author-details.component.html',
  styleUrls: ['./user-author-details.component.css']
})
export class UserAuthorDetailsComponent implements OnInit,OnChanges{
  author: any=[]
  autherID !: number
  userId!:User
  userData?:any
  totalPages:number=0;
  page:number=1;
  _pagination:any=[];
  constructor (
                private ActivatedRoute : ActivatedRoute,
                private Api: ApiService,
                private Auth: AuthService,){
                  
                  this.Auth.getuser().subscribe(user=>{
                    this.userData = user;
                    this.userId = this.userData.user._id})


                  this.ActivatedRoute.paramMap.subscribe((paramMap)=>{
                    //convert ID to int and check to null
                    this.autherID =  +paramMap.get('id')! || 1  ;
                  })
                 }
  ngOnChanges() {

  }

  ngOnInit() {
    
    this.getbookAuthor();
  }
  getbookAuthor(){
    this.Api.get(`${environment.baseUrl}/admin/author/authorID/${this.autherID}/${this.userId}`)
    .subscribe((aut) => this.author = aut);
  }
  next=()=>{
    if(this.page<this.totalPages){
      this.page++;
      this.getbookAuthor();
    }}
    prev=()=>{
      if(this.page>1){
      this.page--;
      this.getbookAuthor();
      }
    }

    currentPage(p:number)
    {
      this.page=p;
      this.getbookAuthor();
    }
}
