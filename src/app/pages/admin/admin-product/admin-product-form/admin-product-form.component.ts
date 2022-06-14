import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  constructor(
    private productService: ProductService, // Các phương thức API
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr:ToastrService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        this.onValidateNameHasProduct]),
      // FormControl(giá trị mặc định)
      price: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),

    });
    this.productId = '';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id']
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          img: data.img,
          desc: data.desc
        })
      })
    }
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if (!inputValue.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit() {
    // console.log(this.productForm)
    //  1 Nhận dữ liệu từ form
   const data = this.productForm.value; // update
  //  console.log(data)
   this.toastr.success('Update thành công')
    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectToList()
      
      })
    }
    // 2 Call tạo API mới
    return this.productService.createProduct(data).subscribe(data => {  // Thêm mới
      // 3 Quay lại danh sách producta
      alert("Thêm thành công")
      //  this.router.navigate(['/admin','products'])
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ dc chạy và call API
    })
  }
}

