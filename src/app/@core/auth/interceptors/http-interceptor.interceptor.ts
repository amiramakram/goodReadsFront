import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {


  isLogin:boolean=false;

  constructor(private auth:AuthService) {


  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    this.isLogin=this.auth.isLogin();
     if(this.isLogin==true)
      {
     request = request.clone({
      setHeaders: {
       'x-token': `${localStorage.getItem('token')}`,
       //'x-token': `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
      },
    });

  }
    return next.handle(request);

  }
}
