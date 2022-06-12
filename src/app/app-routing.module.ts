import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './layouts/product-detail/product-detail.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:':id',
        component:ProductDetailComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    //  canActivate:[CanAccessAdminGuard],
    children:[
      {
        path:'products',
        children:[
                  {
                    path:'',
                    component:AdminProductListComponent
                  },
                  {
                    path:'create',
                    component:AdminProductFormComponent
                  },
                  {
                    path:'edit/:id',
                    component:AdminProductFormComponent
                  },
                  {
                    path:':id',
                    component:AdminProductDetailComponent
                  },          
        ]
      
      },
      {
        path:'users',
        component:UsersListComponent
      }
    
    ],
  

  },
  {
    path:'auth',
    children:[
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CanAccessAdminGuard]
})
export class AppRoutingModule { }
