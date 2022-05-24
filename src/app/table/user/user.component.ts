import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//  Nơi quản lý tất cả dữ liệu và logic chức năng của users
formValues = {
  id: 0,
  name: '',
  age: 0,
  email:"",
  sdt:"",
  avatar:''
};
users= [
  {
    id:1,
    name:'kienhi123',
    age:20,
    email:'kientvph17883@fpt.edu.vn',
    sdt:'0376517352',
    avatar:"https://www.saga.vn/uploads/%E1%BA%A2nh%20m%C3%B4%20t%E1%BA%A3/anhmota_-how-to-take-and-edit-photos-without-hiring-a-professional.jpg"
  },
  {
    id:10,
    name:'kienhi2002',
    age:10,
    email:'kientvph17883@fpt.edu.vn',
    sdt:'037659352',
    avatar:"https://www.saga.vn/uploads/%E1%BA%A2nh%20m%C3%B4%20t%E1%BA%A3/anhmota_-how-to-take-and-edit-photos-without-hiring-a-professional.jpg"

    
  }
];
onParentSubmit(formData:any){
      //  console.log(formData)
    // Tìm ra id lớn nhất
    const userIds = this.users.map(user => user.id).sort((a, b) => a - b);
    //  console.log(userIds)
    const newId = userIds[userIds.length - 1]
    if (this.formValues.id == 0) {
      // thêm dữ liệu mới vào bảng

      this.users.push({
        ...formData,
        id: newId + 1
      })
    } else {
      // Chỉnh sửa cập nhật dữ liệu
      const index = this.users.findIndex((user) => user.id === this.formValues.id)
      if (index > -1) {
        this.users[index] = {
          ...formData,
          id: this.formValues.id
        }
      }
    }
}
onParentDelete(userId:number){
  this.users = this.users.filter(user=>user.id!==userId)
}
onParentEdit(userId:number){
  const editUsers = this.users.find(user=> user.id === userId)
  if(editUsers){
   return this.formValues = {...editUsers}
  }
  return alert("không tìm thấy")
}
}
