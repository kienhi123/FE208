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
       id:1,
       name:"trân văn kiên",
       age:47,
       gender:0,
       avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
       status:0
     },
     {
      id:2,
      name:"lê van cương",
      age:40,
      gender:0,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
      status:1
     },
     {
      id:3,
      name:"tran thi nga",
      age:27,
      gender:1,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UTcRrhUm2MXhWbI08zhEJUbK4dr36RkOEw&usqp=CAU",
      status:1
     }

   ]
   studentName="kien13deptrai";
   studentId="2002deptrai"

   clickh1(){
     console.log('Đã click thành công')
   }
   // Định nghĩa hàm khi click bảng
   showStatus=true;
   changeStatus(){
     this.showStatus = !this.showStatus
   }

   // Định nghĩa hàm khi thay đổi nội dung Input
   inputValue = ''
   changeInput(e:any){
    this.inputValue= e.target.value
   }
   // Định ngĩa hàm giá trị Input

  inputVales = {
   
    name:'',
    age:'',
    avatar:'',
    gender:'0',
  
  }
   

  //  onInputName(event:any,infor:string){
  //      this.inputVales.name= event.target.value
  //  }
   
  //  onInputAge(event:any,infor:string){
  //     this.inputVales.age = event.target.age
  // }

  // key:'name'| 'age'=> key chỉ nhận dc name và age
  onInput(event:any,key:'name'|'age'|'avatar'|'gender'){
       this.inputVales[key]=event.target.value
  }

  onSubmit(){
   console.log(this.inputVales)
   // Thêm dữ liệu vừa thao tác form vào bảng teacher
     
   this.teachers.push({
     ...this.inputVales,
     age:+this.inputVales.age,
     gender:+this.inputVales.gender,
     status:0,
     id: this.teachers.length+1
   });
 // Cập nhật giá trị cho input ở form
// [value]="this.inputvalues.name"

  this.inputVales = {
    name:'',
    age:'',
    avatar:'',
    gender:'0',
  }
  }
}



