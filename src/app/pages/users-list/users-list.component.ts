import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
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
    private usersService:UsersService,
    private toastr:ToastrService
  ) {
    this.users= []
   }
  
  ngOnInit(): void { 
     this.onGetlist()
    this.usersService.listusers().subscribe((data)=>{
      this.users = data
    })
  }
  onGetlist(){
    this.usersService.getUsers().subscribe((data)=>{
      this.users=data
  });
}
  onDelete(id:string | number){
    const confirmDelete = confirm('Bạn có muốn xóa không')
    if(confirmDelete && id){
     this.toastr.success('Xóa thành công')
       this.usersService.deleteUsers(id).subscribe((data)=>{
         // Cập nhật danh sách
         this.onGetlist();
       })
    }
 }
  
}
