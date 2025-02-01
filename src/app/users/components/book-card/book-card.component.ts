
import { Router } from '@angular/router';
import { Book } from 'src/app/@shared/model/book';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  @Input() book!:any;
  rating: number = 1 ;
  avgRating :number = 1;
  bookId?:string 
   constructor(private _Router : Router){

   }



  setRating(): void {
    this._Router.navigate([`/book/${this.book.book._id}`]);
    //  this.rating = star
    //  console.log(this.rating);
    //  console.log(this.book?.rating);
  }

  ngOnInit(): void {
    // console.log(this.book?.rating );
    this.rating = this.book?.rating
    this.avgRating = this.book?.book?.avg_rate
  }

}
