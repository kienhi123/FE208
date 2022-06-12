import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
   products:Product[]
  constructor(
    private productService:ProductService,
    private toastr:ToastrService) { 
    this.products=[]
  }
  ngOnInit(): void {
    this.onGetlist()
}
onGetlist(){
  this.productService.getProducts().subscribe((data)=>{
    this.products=data
});
}
onUpdateStatus(productId: string, newStatus: number) {
  this.productService.updateProduct(`${productId}`, {
    status: newStatus
  }).subscribe(data => {
    this.onGetlist();
  });
}
onDelete(id:string | number){
  // confirm
   const confirmDelete = confirm('Bạn có muốn xóa không')
   if(confirmDelete && id){
    this.toastr.success('Xóa thành công')
      this.productService.deleteProduct(id).subscribe((data)=>{
        // Cập nhật danh sách
        this.onGetlist();
      })
   }
}
}
