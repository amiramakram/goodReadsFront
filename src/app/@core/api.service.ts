import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get(`${url}`, {
      headers
    });

  }




  post(url:string,body:any):Observable<any>
  {
    return this.httpClient.post(`${url}`,body);
  }

  /*postJson(url:string,body?:{}):Observable<any>
  {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.post(`${url}`,JSON.stringify(body),
    {
      headers
    });

  }*/



  put(url:string,body?:{}):Observable<any>
  {

    return this.httpClient.put(`${url}`,body);

  }


  delete(url:string):Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.delete(`${url}`,{headers});

  }


}
