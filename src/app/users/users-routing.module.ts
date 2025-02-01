import { AllBookComponent } from './components/all-book/all-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserBookDetailsComponent } from './components/user-book-details/user-book-details.component';
import { HomeComponent } from './home/home/HomeComponent.1';
import { UserAuthorsComponent } from './components/user-authors/user-authors.component';
import { UserAuthorDetailsComponent } from './components/user-author-details/user-author-details.component';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserCategoryDetailsComponent } from './components/user-category-details/user-category-details.component';
import { PopularComponent } from './home/popular/popular.component';
import { AuthGuard } from '../@core/auth/guards/auth.guard';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
   {path:'',component:HomeComponent,children:
   [
    {path:'books',canActivate:[AuthGuard] ,component:UserBooksComponent},

    {path:'allBooks',component:AllBookComponent},

    {path:'home',component:PopularComponent},
    {path:'Aboutus',component:AboutusComponent},
    {path:'book/:id',canActivate:[AuthGuard],component:UserBookDetailsComponent},
    {path:'author',component:UserAuthorsComponent},
    {path:'author/:id',component:UserAuthorDetailsComponent},
    {path:'category',component:UserCategoriesComponent},
    {path:'category/:id',component:UserCategoryDetailsComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
