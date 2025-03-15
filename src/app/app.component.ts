import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product";
import {ProductServiceService} from "./service/product-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shoes: Product[] = [];
  jackets: Product[] = [];
  hats: Product[] = [];

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
    this.shoes = this.productService.getShoes();
    this.productService.getJackets().subscribe({
      next: (data: Product[]) => {
        this.jackets = data;
      }
    });
    this.productService.getHats().subscribe({
      next:(data : Product[]) =>{
        this.hats = data;
    }
    });
  }

  deleteAllHats() {
    this.productService.deleteAllHats().subscribe({})
    this.hats = [];
  }
}
