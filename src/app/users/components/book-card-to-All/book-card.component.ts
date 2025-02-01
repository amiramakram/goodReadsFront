
import { Router } from '@angular/router';
import { Book } from 'src/app/@shared/model/book';
import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardAllComponent implements OnInit{

  @Input() books?:any;
  rating: number = 1 ;
  bookId?:string

   constructor(private _Router : Router){
   }


  setRating(): void {
    this._Router.navigate([`/book/${this.books._id}`]);
    //  this.rating = star
    //  console.log(this.rating);
    //  console.log(this.book?.rating);
  }

  ngOnInit(): void {
    // console.log(this.books?.rating );
    this.rating = this.books?.avg_rate
  }

}
