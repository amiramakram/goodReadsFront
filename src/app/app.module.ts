import { HttpInterceptorInterceptor } from './@core/auth/interceptors/http-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './@core/api.service';
import { CoreModule} from './@core/@core.module';
import { SharedModule } from './@shared/@shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
