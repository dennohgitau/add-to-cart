import { Component, OnInit } from '@angular/core';
import { Billing } from 'src/app/models/billing.model';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from "src/app/services/checkout.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  billing: Billing = {
    name: '',
    email: '',
    phone: 0,
    address: ''
  };
  submitted = false;

  public product: any = []
  public grandTotal !: number;

  constructor(private cartservice : CartService, private checkoutService: CheckoutService){}

  ngOnInit(): void{
    this.cartservice.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice()

  })
}
  removeItem(item: any){
    this.cartservice.removeCartItem(item);
  }
  saveBilling(): void{
    const data = {
      name: this.billing.name,
      email: this.billing.email,
      phone: this.billing.phone,
      address: this.billing.address

    };
    

    this.checkoutService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  
  newbilling(): void {
    this.submitted = false;
    this.billing = {
      name: '',
      email: '',
      phone: 0,
      address: '',
    }
  }

}
