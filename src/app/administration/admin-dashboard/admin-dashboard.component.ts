import { environment } from './../../../environments/environment.development';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  totalAuthors:Number=0;
  totalBooks:Number=0;
  totalUsers:Number=0;
  topAuthors:any;
constructor(private api:ApiService){}
  ngOnInit(): void {

     this.api.get(`${environment.baseUrl}/dashboard/authors`).subscribe(
     data=>{
     this.totalAuthors=data.totalAuthors;
     });

      this.api.get(`${environment.baseUrl}/dashboard/books`).subscribe(
      data=>{
      this.totalBooks=data.totalBooks;
      });

      this.api.get(`${environment.baseUrl}/dashboard/users`).subscribe(
        data=>{
        this.totalUsers=data.totalUsers;
        });

        this.api.get(`${environment.baseUrl}/dashboard/topAuthors`).subscribe(data=>{
          this.topAuthors=data.topAuthors;
        });

  }

}
