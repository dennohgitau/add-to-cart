import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  public totaItem : number = 0;
  public searchTerm: string = '';
  constructor(private cartservice : CartService){ }

  ngOnInit(): void{
    this.cartservice.getProduct()
    .subscribe(res=>{
      this.totaItem = res.length;

    })

  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
    
  }

}
