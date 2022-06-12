import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeLoginRequest, TypeLoginRespone, TypeSignupRequest, TypeSignupRespone } from 'src/app/types/Auth';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: TypeLoginRequest): Observable<TypeLoginRespone>{
    return this.http.post<TypeLoginRespone>(environment.login,data);
  }
  signup(data: TypeSignupRequest): Observable<TypeSignupRespone>{
    return this.http.post<TypeSignupRespone>(environment.signup,data);
  }
}
