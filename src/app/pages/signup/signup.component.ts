import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth-services/auth-services.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.signupForm = new FormGroup({
      name:new FormControl('',[
        Validators.required
      ]),
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
    const submitData = this.signupForm.value
    this.authService.signup(submitData).subscribe(data=>{
      this.toastr.success('Đăng ký thành công')
      localStorage.setItem('loggedInUser',JSON.stringify(data));
   
      this.router.navigateByUrl('/auth/login')
    })
  }

}
