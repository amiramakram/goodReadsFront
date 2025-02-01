import * as Aos from 'aos';
import { environment } from './../../../../environments/environment';
import { ApiService } from './../../../@core/api.service';
import { Book } from './../../../@shared/model/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  totalPages: number = 0;
  page: number = 1;
  _pagination: any;
  popularBook: any;
  popularAuthor: any;
  popularCategory: any;

  constructor(private Api: ApiService) {}

  ngOnInit(): void {
    this.getpopularBook();

    this.getpopularCategory();

    this.getpopularAuthor();
    Aos.init();
  }

  getpopularBook() {
    this.Api.get(`${environment.baseUrl}/popular/popularBook`).subscribe(
      (data) => {
        this.popularBook = data;
      }
    );
  }
  getpopularCategory() {
    this.Api.get(`${environment.baseUrl}/popular/popularCategory`).subscribe(
      (data) => {
        this.popularCategory = data;
        // console.log(this.popularCategory)
      }
    );
  }

  getpopularAuthor() {
    this.Api.get(`${environment.baseUrl}/popular/popularAuthor`).subscribe(
      (data) => {
        this.popularAuthor = data;
        // console.log(this.popularAuthor)
      }
    );
  }
}
