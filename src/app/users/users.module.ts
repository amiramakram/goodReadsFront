// import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { UserFooterComponent } from './user-layout/user-footer/user-footer.component';
import { UserAuthorsComponent } from './components/user-authors/user-authors.component';
import { UserAuthorDetailsComponent } from './components/user-author-details/user-author-details.component';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { UserCategoryDetailsComponent } from './components/user-category-details/user-category-details.component';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserBookDetailsComponent } from './components/user-book-details/user-book-details.component';
import { HomeComponent } from './home/home/HomeComponent.1';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PopularComponent } from './home/popular/popular.component';
import { UserAuthorCardComponent } from './components/user-author-card/user-author-card.component';
import { SharedModule } from '../@shared/@shared.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCardAllComponent } from './components/book-card-to-All/book-card.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AllBookComponent } from './components/all-book/all-book.component';


@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent,
    UserAuthorsComponent,
    UserAuthorDetailsComponent,
    UserCategoriesComponent,
    UserCategoryDetailsComponent,
    UserBooksComponent,
    UserBookDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PopularComponent,
    UserAuthorCardComponent,
     BookCardComponent,
     BookCardAllComponent,
     AboutusComponent,
     AllBookComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
