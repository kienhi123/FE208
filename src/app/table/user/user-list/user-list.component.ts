import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   @Input() users:any;
   @Output () handleDlete:EventEmitter<number>;
   @Output () handleEdit:EventEmitter<number>;

  constructor() {
    this.handleDlete= new EventEmitter();
    this.handleEdit= new EventEmitter();
  }

  ngOnInit(): void {
  }
  
 
  onDelete(userId:number){
    this.handleDlete.emit(userId)
  }
  onEdit(userId:number){
    this.handleEdit.emit(userId)
  }

}
