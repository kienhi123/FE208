import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../pages/local-storage.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { Category, Product } from '../types/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category:Category[]
  product:Product;
  products:Product[]
  cartItemValue: number = 1;
  constructor(
    private productService:ProductService,
    private router:Router,
    private lsService: LocalStorageService,
    private categoryServices :CategoryService,
    
  ) {
    this.product = {
    _id:"",
    name:'',
    price:"",
    img:"",
    desc:"",
    status:0
       
    };
    this.category = [];
    this.products=[]
   }

  ngOnInit(): void {
    this.onGetlist()
    this.categoryServices.listCategories().subscribe((data)=>{
      this.category = data
      console.log(data)
    })
  }
  onGetlist(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=data
  });
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }

  onAddToCart() {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      id: this.product._id,
      name: this.product.name,
      price:this.product.price,
      img:this.product.img,
      status: this.product.status,
      value: +this.cartItemValue
    };
 this.lsService.setItem(addItem);
    this.cartItemValue = 1
  }
  onLogOut(){
    const confirm = window.confirm("Bạn có chắc chắn đăng xuất?")
    if(confirm){
      localStorage.removeItem('loggedInUser')
      this.router.navigateByUrl('/')
    }
  }
}
