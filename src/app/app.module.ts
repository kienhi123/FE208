import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAgeComponent } from './table/table-age/table-age.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompoentvalidatesComponent } from './compoentvalidates/compoentvalidates.component';
import { UserComponent } from './table/user/user.component';
import { UserListComponent } from './table/user/user-list/user-list.component';
import { UserFormComponent } from './table/user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './layouts/product-detail/product-detail.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
// import { ProductsComponent } from './service/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableNameComponent,
    TableGenderComponent,
    TableStatusComponent,
    TableAgeComponent,
    TableAvatarComponent, 
    FormComponent, CompoentvalidatesComponent, UserComponent, UserListComponent, UserFormComponent, HomeComponent, ClientLayoutComponent, AdminLayoutComponent, AdminProductListComponent, AdminProductFormComponent, AdminProductDetailComponent, LoginComponent, CartComponent, ProductDetailComponent, SignupComponent, UsersListComponent, CartPageComponent, CategoryPageComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-top-right'
    })
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
