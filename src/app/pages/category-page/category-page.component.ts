import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { typeCateProduct } from 'src/app/types/Category';



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
   productCategory:typeCateProduct;
  constructor(
    private categoryservices : CategoryService,
    private activeRouter : ActivatedRoute
  ) {
    this.productCategory={
      category:{
        _id: "",
        name: "",
        status: 0
      },
      products:[]
    }
   }

  ngOnInit(): void {
     this.GetProductCategory()
  }
  GetProductCategory() {
    const idFromUrl = this.activeRouter.snapshot.params['id']
    this.categoryservices.listOneCategory(idFromUrl).subscribe(data=>{
      this.productCategory = data

    })
  }

}
