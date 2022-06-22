import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/types/Cart';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems : Cart[]
  Totalprice :number

  constructor(
    private lsStorge : LocalStorageService,
  ) {
    this.cartItems= [],
    this.Totalprice=0
   }

  ngOnInit(): void {
    this.cartItems= this.lsStorge.getItem()
    // console.log(this.cartItems);
    this.cartItems.map(item => this.Totalprice += this.onToTalPrice(+item.price!, item.value!))
  }
  onToTalPrice(price:number, value: number): number{
    return price*value
  }


}
