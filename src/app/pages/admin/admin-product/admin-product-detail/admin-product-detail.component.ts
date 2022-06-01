import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
   product:Product;
  constructor(
    private productServie:ProductService,
    private activateRoute:ActivatedRoute
  ) { 
    this.product={
      id:0,
      name:''
    };
  }
  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']

    this.productServie.getProduct(idFromUrl).subscribe(data=>{
      this.product=data;
    });
  }

}
