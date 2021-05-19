import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Dass21sheetComponent} from '../../dass21sheet/dass21sheet.component';
import {DialogData} from '../../dass21sheet/resultmodal/resultmodal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: any;
  dataP: any;
  productId = null;

  constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute,
              public dialogRef: MatDialogRef<Dass21sheetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataP = this.data;
  }

  ngOnInit() {
    this.product = this.dataP.product;
    // this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    // this.product = this.storeService.getProduct(this.productId);
  }

}
