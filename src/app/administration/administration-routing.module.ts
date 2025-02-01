import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '../@core/auth/guards/authAdmin.guard';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [



  {path:'login',component:AdminLoginComponent},
  {path:'',component:AdminPanelComponent,children:
  [
    { path:'', redirectTo: 'Dashboard', pathMatch: 'full' },
    {path:'Dashboard',component:AdminDashboardComponent},
    {path:'Books',component:AdminBooksComponent},
    {path:'Authors',component:AdminAuthorsComponent},
    {path:'Categories',component:AdminCategoriesComponent}

  ], canActivate:[AuthAdminGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
