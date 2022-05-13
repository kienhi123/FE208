import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_web16304 FPT POLY';
// Phần biến,logic
  name='kienhi123';
  age = '20';

 // Kiểu dữ liệu mảng
   teachers = [
     {
       id:"1",
       name:"trân văn kiên",
       age:47,
       gender:0,
       avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
       status:0
     },
     {
      id:"2",
      name:"lê van cương",
      age:40,
      gender:0,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
      status:1
     },
     {
      id:"3",
      name:"tran thi nga",
      age:27,
      gender:1,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
      status:1
     }

   ]
   studentName="kien13deptrai";
   studentId="2002deptrai"
}


