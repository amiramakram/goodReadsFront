import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-author-card',
  templateUrl: './user-author-card.component.html',
  styleUrls: ['./user-author-card.component.css']
})
export class UserAuthorCardComponent {

 @Input() author :any=[];
}
