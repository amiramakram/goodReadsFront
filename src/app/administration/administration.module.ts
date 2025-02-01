import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminSidebarComponent } from './admin-layout/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from '../@shared/@shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAuthorsEditComponent } from './admin-authors/admin-authors-edit/admin-authors-edit.component';
import { AdminAuthorsAddComponent } from './admin-authors/admin-authors-add/admin-authors-add.component';
import { AdminBooksAddComponent } from './admin-books/admin-books-add/admin-books-add.component';
import { AdminBooksEditComponent } from './admin-books/admin-books-edit/admin-books-edit.component';
import { AdminChartComponent } from './admin-dashboard/admin-chart/admin-chart.component';
import { AdminCategoryEditComponent } from './admin-categories/admin-category-edit/admin-category-edit.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminPanelComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminAuthorsComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminLoginComponent,
    AdminAuthorsEditComponent,
    AdminAuthorsAddComponent,
    AdminBooksAddComponent,
    AdminBooksEditComponent,
    AdminChartComponent,
    AdminCategoryEditComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdministrationModule { }
