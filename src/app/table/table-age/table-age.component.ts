import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-age',
  templateUrl: './table-age.component.html',
  styleUrls: ['./table-age.component.css']
})
export class TableAgeComponent implements OnInit {
   @Input ()  age:any
  constructor() { }

  ngOnInit(): void {
  }

}
