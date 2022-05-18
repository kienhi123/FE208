import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compoentvalidates',
  templateUrl: './compoentvalidates.component.html',
  styleUrls: ['./compoentvalidates.component.css']
})
export class CompoentvalidatesComponent implements OnInit {
   @Input () field:any
   @Input () key:string
  constructor() { 
    this.key='';
  }

  ngOnInit(): void {
  }

}
