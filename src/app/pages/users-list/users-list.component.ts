import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/types/Product';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:Users[]
  constructor(

    private userServices :UsersService,
  ) {
    this.users= []
   }
  
  ngOnInit(): void {
    this.userServices.listusers().subscribe((data)=>{
      this.users = data
    })
  }

}
