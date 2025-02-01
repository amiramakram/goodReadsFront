import { AuthService } from 'src/app/services/user/auth.service';
import { User } from './../../../@shared/model/user';
import { environment } from './../../../../environments/environment';
import { ApiService } from './../../../@core/api.service';
import { ReviewService } from './../../../services/user/review.service';
import { BookServiceService } from './../../../services/user/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews, BookUser } from './../../../@shared/model/book-user';
import {
  Component,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './../../auth/login/login.component';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css'],
})
export class UserBookDetailsComponent implements OnInit {

  book?: any;
  // reviews!: any;
  // reviewsId!:any;
  bookId!: string;
  rating!: number;
  status!: string | "Want To Read";
  reviewForm: FormGroup;
  likeForm:FormGroup ;
  user_id!: User;
  user_info!: any;
  userData!: any;
  bookUserId!:BookUser

  constructor(
    private Auth: AuthService,
    private ActivatedRoute: ActivatedRoute,
    private BookService: BookServiceService,
    private ReviewsService: ReviewService,
    private Api: ApiService
  ) {
    this.userData = this.Auth.getuser().subscribe((user) => {
      this.userData = user;
      // console.log(this.userData);
      // console.log(this.userData.user.first_name);
      this.user_id = this.userData.user._id;
      this.user_info = this.userData.user;
    });

    this.reviewForm = new FormGroup({
      description: new FormControl('', [Validators.required]),

    });
    this.likeForm =new FormGroup({
      like: new FormControl(''),
    })

    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.bookId = paramMap.get('id') || '';
    });
  }


  ngOnInit(): void {
    this.getbook();


  }

  getbook() {
    this.Api.get(
      `${environment.baseUrl}/book/${this.bookId}/${this.user_id}`
    ).subscribe((book) => {
      this.book = book;
      this.getRatin();
      // console.log(book);

    });
  }


  //////////   get rating
  getRating(star: number): void {
    this.rating = star;
    // console.log(this.rating);
    // console.log(this.book.bookUser.rating);
  }
  getRatin() {
    this.rating = this.book.bookUser.rating;
  }
  add(stat: any) {
    this.status = stat.target.value;
    // console.log(this.status);
  }

  /////// set Rating form to db
  addRating() {
    let data = {
      rating: this.rating,
      status: this.status,
      book: this.bookId,
      user: this.user_id,
    };


    if(this.book.bookUser._id  == null)
    {
      this.Api.post(`${environment.baseUrl}/bookUser`, data).subscribe((obj) => {
        this.bookUserId = obj.id
        // console.log(obj);
        this.getbook();
        // console.log("create");
      });

    }else{
      this.Api.put(`${environment.baseUrl}/bookUser/${this.book.bookUser._id}`, data).subscribe((obj) => {
        // console.log(obj);
        this.getbook();
        // console.log("update");
      });
    }

  }
  /////// send Reviews form to db

  setReview() {
    let data = {
      user: this.user_id,
      book: this.bookId,
      comment: this.reviewForm.controls['description'].value,
      like: false,
    };
    this.Api.post(`${environment.baseUrl}/reviews/`, data).subscribe((data) => {
      this.getbook();
      // console.log(data);
      this.getbook();
    });
  }

  ////////////// put and set Like To Review form to db

  setLikeToReview(oldreview:any, Reviewdata:any ) {
    // console.log(oldreview.target.value);
    const data:any = {
      userId: this.user_id,
      like: oldreview.target.value,
    };
    // console.log(Reviewdata._id);
    this.Api.put(`${environment.baseUrl}/reviews/${Reviewdata._id}`, data).subscribe((data) => {
      // console.log(data);
    });
  }

}


