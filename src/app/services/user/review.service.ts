import { Reviews, BookUser } from './../../@shared/model/book-user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private Http:HttpClient) { }

  getReviews():Observable<Reviews>{
    return this.Http.get<Reviews>(`${environment.baseUrl}/reviews`,{
    headers: new HttpHeaders().set('Authorization','secrt token')
    })
  }

  createReviews(userId:number,bookId:number, comment:string,like:boolean):Observable<Reviews>{
    return this.Http.post<Reviews>(`${environment.baseUrl}/reviews`,{
      id:userId, bookId:bookId, comment:comment, like:like
    })
  }

  updateReviews(id:number,comment:string,like:boolean):Observable<Reviews>{
    return this.Http.put<Reviews>(`${environment.baseUrl}/reviews`+id ,{
       comment:comment, like:like
    })
  }



}
