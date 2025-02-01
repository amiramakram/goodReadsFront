import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ICategory}from '../../@shared/model/icategory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) { }

  getCategories(numPage:number) :Observable<any> {
    // numPage=2;
   return this.http.get<any>(`${environment.baseUrl}/category/page/${1}`);
  }



  getCategory(id:any){
    return this.http.get<any>(`${environment.baseUrl}/category/${id}`);


  }
getcategorybooks(id:any):Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/category/${id}/page/1`
    )

}}
