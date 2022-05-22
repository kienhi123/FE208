import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
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
  ]

  onSubmit(userForm:NgForm){
    //  console.log(formData)
     // Tìm ra id lớn nhất
   const userIds = this.users.map(user=>user.id).sort((a,b)=> a-b);
  //  console.log(userIds)
     const newId = userIds [userIds.length-1]


if(this.inputValues.id==0){
     // thêm dữ liệu mới vào bảng

     this.users.push({
      ...userForm.value,
      id:newId+1
    })
}else{
  const index= this.users.findIndex((user)=>user.id === this.inputValues.id)
  if(index > -1){
         this.users[index] = {
           ...userForm.value,
           id:this.inputValues.id
         }
  }
}

     userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt:'',
      avatar:''
    });
  }

  onDelete(userId:number){
    this.users= this.users.filter((user)=>user.id !== userId)
  }

  onEdit(userId:number){
     // Tìm ra user  có id là userId truyền vào
     const editUser = this.users.find((user)=> user.id === userId)
     console.log(editUser);
     if(editUser){
      this.inputValues= {...editUser};
     }
  } 
}
