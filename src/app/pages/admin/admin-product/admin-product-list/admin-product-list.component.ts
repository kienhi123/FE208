import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
   products:Product[]
  constructor(private productService:ProductService) { 
    this.products=[]
  }

  ngOnInit(): void {
  
    this.productService.getProducts().subscribe((data)=>{
      this.products=data

  });
}
}
