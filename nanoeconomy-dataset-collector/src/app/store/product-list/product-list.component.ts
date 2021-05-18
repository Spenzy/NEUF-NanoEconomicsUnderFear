import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;
  empty: false;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getAllProducts().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }

}
