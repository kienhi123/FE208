import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
//  Kiểu dữ liệu Observalble sẽ giúp lắng nghe API trả về kết quả
  getProducts ():Observable<Product[]> {
     return this.http.get<Product[]>(environment.products)
  }
  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`);
  }
}
