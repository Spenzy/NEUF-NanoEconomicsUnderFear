import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';
import {MatDialog} from '@angular/material/dialog';
import {ProductComponent} from '../product/product.component';
import {TrackerService} from '../../services/tracker.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private storeService: StoreService, private trackerService: TrackerService, public dialog: MatDialog) { }

  viewProduct(product){
    this.trackerService.timeStamp('clicked on' + product.name, 'clicked' );
    const dialogRef = this.dialog.open(ProductComponent, {
      data: {product}
    });
  }

  ngOnInit() {
    this.storeService.getAllProducts().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }

}
