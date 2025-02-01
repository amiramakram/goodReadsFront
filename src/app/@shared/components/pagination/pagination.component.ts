import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() next:any;
  @Input() prev:any;
  @Input() page:number=1;
  @Input() pagination:number[]=[];
  @Output() currPage:EventEmitter<number>;
  constructor()
  {
    this.currPage=new EventEmitter<number>();
  }

  pageChange(p:number)
  {
    this.currPage.emit(p);

  }

}
