import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // 1 Lấy ra thông tin user trong localstroge
    const currentUser = localStorage.getItem('loggedInUser');    // 2 kiểm tra thông tin có chính xác hay không
    if(currentUser){
     
        return true
    }
    // 3 Nếu đúng thì đi tiếp nếu sai thì về login
    this.router.navigateByUrl('auth/login')
    return false;
  }
  
}
