
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/user/category.service';
import { Book } from 'src/app/@shared/model/book';
import { ApiService } from 'src/app/@core/api.service';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user-category-details',
  templateUrl: './user-category-details.component.html',
  styleUrls: ['./user-category-details.component.css'],
})


export class UserCategoryDetailsComponent implements OnInit{

  categoryID!: string;
  books!: Book[];
  categories?:any
  userData?:any
  userId?:any
  
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,

    private api: ApiService,
    private auth: AuthService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.categoryID = paramMap.get('id') || '';

  
    this.auth.getuser().subscribe((user: any)=>{
      this.userData = user;
      this.userId = this.userData.user._id
     })
    })
    
  }
  
  ngOnInit(): void {
    this.getcategory()
  }

getcategory(){
  this.api.get(`${environment.baseUrl}/category/${this.categoryID}/${this.userId}`).subscribe(data=>{
    this.categories = data
    console.log(this.categories);
  })
}


// this.activatedRoute.paramMap.subscribe((paramMap) => {
//   //convert ID to int and check to null
//   // this.categoryID =  +paramMap.get('id')! || 1  ;
//   this.categoryService
//     .getCategory(paramMap.get('id'))
//     .subscribe((category) => {
//       this.category = category;
//     });
// });
//To get category name
// this.categoryService.getCategory().subscribe((aut) => {
//   this.categories = aut.data;
//   console.log(this.categories );
// }  );
//To get category books
// this.activatedRoute.paramMap.subscribe((paramMap) => {
//    ID=paramMap.get('id')
// console.log(ID);
//       this.categoryService
//         .getcategorybooks(ID)
//         .subscribe((books) => {
//           this.books = books;
//           console.log(this.books);
//         });
//     });
//   }
// }
  }

