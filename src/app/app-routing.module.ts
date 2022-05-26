import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './table/user/user-form/user-form.component';
import { UserComponent } from './table/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'user',
        component:UserComponent
      }
    ]
  },
  {
    path:'admin'
  }
  // {
  //   path:'user',
    
  //   // component:UserComponent,
  //   // 1. Nếu có chilren thì không dùng compoent để render nữa
  //   // 2. Nếu vẫn muốn sử dụng compoent (khung layout ) thì trong compoent sẽ phải có router-oulet
  //   children:[
  //         {
  //               path:'',
  //               component:UserComponent
  //         },
  //         {
  //           path:'create',
  //           component:UserFormComponent
  //         },
  //         {
  //           path:'edit',
  //           component:UserFormComponent
  //         }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
