import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {

  product: Product;
  products = PRODUCTS;
  viewMode = 'tab1';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let i = 0;
    let j = 0;
    this.products.forEach(element => {
      if (element._id === id) {
        j += i;
      } else {
        i += 1;
      }
    });
    this.product = this.products[j];
  }

}
