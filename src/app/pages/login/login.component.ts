import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth-services/auth-services.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required
      ])
    })
  }
  ngOnInit(): void {
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;

    if (!inputValue.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit(){
    const submitData = this.loginForm.value
    this.authService.login(submitData).subscribe(data=>{
      this.toastr.success('Đăng nhập thành công')
      localStorage.setItem('loggedInUser',JSON.stringify(data));
      this.router.navigateByUrl('/admin/products')
    })
  }
}
