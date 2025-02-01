import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: any="";
  @Output() searchresult:EventEmitter<string>;
  @Output() showResult:EventEmitter<boolean>;
  @Input() title:string="";
  status:boolean=true;
  constructor(){
    this.searchresult=new EventEmitter<string>();
    this.showResult=new EventEmitter<boolean>();
  }
  search(ele:string){
    this.searchresult.emit(ele);
    this.showResult.emit(true);
  }
  changeSHOWresult(){
    this.showResult.emit(false);
  }
}
